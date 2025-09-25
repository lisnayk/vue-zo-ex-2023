import { provider } from '@/services'
export default {
    install: (app) => {
        const services = provider();
        app.config.globalProperties.$services = services;
        app.provide('services', services);
    }
}
