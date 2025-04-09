import { ManipulationDom } from "./domLabels.js";
import { selecionarArquivo, carregarEstados, trilhasCheck, segurancaClick, processarInscricao, passarParametros,  validarCampoVazio } from "./functions.js";
import { formatadorCep, formatadorCpf, formatadorEmail, formatadorNumero, formatadorSenha, formatadorTelefone } from "./formatters.js";

//Domlabels
ManipulationDom();
//functions
selecionarArquivo();
passarParametros(); 
carregarEstados();
trilhasCheck();
segurancaClick();
processarInscricao();
validarCampoVazio();

//formatadores
formatadorCpf();
formatadorEmail();
formatadorTelefone();
formatadorCep();
formatadorNumero();
