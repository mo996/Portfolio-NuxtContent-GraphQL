export default defineNuxtPlugin((nuxtApp) => {
    const { githubToken } = useRuntimeConfig();
    nuxtApp.hook("apollo:auth", ({ client, token }) => {
        console.log("Setting token:", githubToken);
        token.value = githubToken;
    });
});