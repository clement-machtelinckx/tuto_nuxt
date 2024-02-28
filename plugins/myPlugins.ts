export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            proHello: (msg: string) => console.log('Hello ${msg}'),
        },
    };
});