# Kite

**Local Intelligence, Everywhere.**

Kite é uma plataforma de inteligência artificial local que executa modelos de linguagem diretamente no navegador, usando **WebLLM + WebGPU** para aproveitar o hardware do próprio dispositivo.

## V0.1 — Initial Architecture

A primeira arquitetura é **local-first** e **frontend-first**:

```text
Kite UI
  ↓
Model Manager
  ↓
Web Worker
  ↓
WebLLM
  ↓
WebGPU
  ↓
GPU / memória do dispositivo
```

### O que já está estruturado

- Next.js + React + TypeScript
- Runtime WebLLM isolado em `src/lib/webllm`
- Web Worker para inferência
- Verificação inicial de WebGPU
- Catálogo Starter / Standard / Advanced
- Carregamento sob demanda
- Barra de progresso de inicialização
- Seleção persistida do modelo
- Interface inicial de chat
- Streaming de respostas

### Estratégia de modelos

O Kite começa com um modelo **Starter** e evita inicializar modelos pesados automaticamente. Modelos Standard e Advanced ficam preparados para serem ativados sob demanda.

### Privacidade

A proposta do Kite é executar a inferência localmente. A aplicação hospedada na Vercel entrega o frontend; o processamento do modelo acontece no navegador compatível com WebGPU.

## Próximos passos

1. Testar o Starter em desktop e mobile.
2. Completar persistência de conversas em IndexedDB.
3. Criar gerenciador de cache/modelos.
4. Implementar downloads opt-in para modelos maiores.
5. Melhorar detecção de capacidade do dispositivo.
6. Adicionar testes e pipeline de deploy.

## Licença

MIT
