# Instruções de utilização

## ➕ Instalando Dependência
Ao baixar/clonar o repositório, acesse a pasta ```server```.
Ao acessar essa pasta, utilize o bash ou seu terminal favorito e rode o seguinte comando:
```bash
npm install
```


## ⚠️ Para testar as rotas, duas opções estão disponíveis:
1. Versão hospedada na nuvem <br/>
2. Versão localhost, porta 5000

## ☁️ 1. Versão Nuvem
Forma mais simples e menores "burocrática", uma vez que não será necessário o arquivo `.env`.

Após instalações de todas as dependências, rode o backend com o seguinte comando:
```bash
npm start
```

A seguinte mensagem deverá aparecer em seu terminal:
```backend server is running!```

Com o backend rodando, utilize o Insomnia ou software de preferência e passe a seguinte URL: 
```bash
https://server-pizzaria-eixo4.onrender.com/
```

Após isso, complete com a rota que desejar testar <br/>
🚨 Todas as rotas começão com `api/` <br/><br/> 

Exemplos: 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-pizzaria/assets/103972585/ad36c91d-b46a-440d-a3da-5e19a5945155)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-pizzaria/assets/103972585/d74d6206-bdf3-4c99-ab37-934024454dcc)

🚨🚨 Para testar todas as rotas, somente logando como usuário administrador! <br/>
⚠️🗣️ Detalhe importante, um token de acesso será necessário para testar as rotas <br/>

📝 As instruções abaixo também servirá para a versão localhost

### Como testar rotas ❓
![Confused GifGIF](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-pizzaria/assets/103972585/863fab21-055d-4473-b2e1-0497fd6bb214)

🚶‍♂️Com o backend rodando, siga o passo a passo abaixo:
1. Faça login como admin <br/>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-pizzaria/assets/103972585/a2e90eb7-96e6-4c60-9cb5-29e728dd2092)

2. Informações do usuário serão retornadas: <br/>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-pizzaria/assets/103972585/30988ce4-ed1a-44f8-985d-0bcd38958d35)

3. Copie apenas o token, sem as aspas <br/>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-pizzaria/assets/103972585/5a7236e4-bc8b-4f5a-bb02-cc65e83d1ca0)

4. Na rota que quiser testar, passe no head o token que acabou de copiar seguido da chave `Bearer` <br/>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-pizzaria/assets/103972585/1c5c4006-8a3d-42fd-93cf-1a4826ffce13)

5. ✅ Show de bola! <br/>
![DoneCongratsGIF](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t4-pizzaria/assets/103972585/1eda1863-90d1-493e-88de-137ec743d7c9)












### 💻 2. Versão Localhost 
