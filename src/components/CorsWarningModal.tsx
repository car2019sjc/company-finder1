import React from 'react';
import { AlertTriangle, X, Terminal, Globe } from 'lucide-react';

interface CorsWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CorsWarningModal: React.FC<CorsWarningModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg mx-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <AlertTriangle className="w-6 h-6 text-orange-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Aviso de Compatibilidade</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Você está acessando a aplicação através do navegador Edge em um ambiente que bloqueia conexões diretas com a API Apollo.io devido a políticas de CORS (Cross-Origin Resource Sharing).
          </p>
          
          <div className="bg-orange-50 border border-orange-200 rounded-md p-4 mb-4">
            <h4 className="font-semibold text-orange-900 mb-2 flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Por que isso acontece?
            </h4>
            <ul className="text-sm text-orange-800 space-y-1 list-disc list-inside">
              <li>A API Apollo.io não permite requisições diretas de outros domínios</li>
              <li>Navegadores modernos bloqueiam essas requisições por segurança</li>
              <li>O Edge tem políticas de segurança mais restritivas</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
              <Terminal className="w-4 h-4 mr-2" />
              Solução Recomendada
            </h4>
            <p className="text-sm text-blue-800 mb-3">
              Execute a aplicação localmente no modo desenvolvimento:
            </p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-xs">
              <div>1. Clone o repositório</div>
              <div className="text-green-400">$ git clone https://github.com/car2019sjc/company-finder1.git</div>
              <div className="mt-2">2. Instale as dependências</div>
              <div className="text-green-400">$ npm install</div>
              <div className="mt-2">3. Execute em modo desenvolvimento</div>
              <div className="text-green-400">$ npm run dev</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}; 