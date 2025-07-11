import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    // Atualiza o state para que a próxima renderização mostre a UI de erro
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log do erro para serviços de análise
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Detectar se é um erro específico do Chrome
    if (error.message?.includes('insertBefore')) {
      console.warn('Chrome-specific DOM error detected. This may be caused by browser extensions.');
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    // Recarregar a página para limpar o estado
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Ops! Algo deu errado</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              Ocorreu um erro ao renderizar a página. Isso pode ser causado por:
            </p>
            
            <ul className="list-disc list-inside text-sm text-gray-600 mb-6 space-y-1">
              <li>Extensões do navegador que interferem com o React</li>
              <li>Problemas de cache do navegador</li>
              <li>Conflitos de renderização específicos do Chrome</li>
            </ul>

            {this.state.error?.message?.includes('insertBefore') && (
              <div className="bg-orange-50 border border-orange-200 rounded-md p-4 mb-6">
                <p className="text-sm text-orange-800">
                  <strong>Dica:</strong> Este erro é comum no Chrome. Tente desabilitar temporariamente as extensões do navegador ou usar o modo anônimo.
                </p>
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 