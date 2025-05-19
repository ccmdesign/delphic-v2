const axios = require('axios');

module.exports = {
  onError: async ({ error, constants, utils }) => {
    try {
        const clickUpToken = process.env.CLICKUP_API_TOKEN; 
        const chatViewId = process.env.CLICKUP_CHAT_VIEW_ID;
        const siteName = process.env.SITE_NAME || constants.SITE_NAME || "Nome do site desconhecido";

        if (!clickUpToken || !chatViewId) {
            utils.build.failPlugin("CLICKUP_API_TOKEN ou CLICKUP_CHAT_VIEW_ID não configurados!");
        }

        const message = {
            comment_text: `[BOT] 🚨 **Deploy falhou no site ${siteName}**\n\nErro: ${error.message}`,
            notify_all: true
        };

        const url = `https://api.clickup.com/api/v2/view/${chatViewId}/comment`;

        await axios.post(url, message, {
            headers: {
            Authorization: clickUpToken,
            "Content-Type": "application/json",
            },
        });

        console.log("Mensagem enviada ao canal de chat no ClickUp!");
    } catch (err) {
        utils.build.failPlugin("Erro ao enviar mensagem para o chat no ClickUp.", { error: err });
    }
  },
};
