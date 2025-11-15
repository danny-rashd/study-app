import {Storage} from '@ionic/storage';

const storage = new Storage();
await storage.create();

export const StorageService = {
    async init() {
        await storage.create();
    },

    async setUser(user: any) {
        await storage.set('user', user);
    },

    async getUser() {
        return await storage.get('user');
    },

    async logout() {
        await storage.remove('user');
    },

    async addDocument(doc: any) {
        const docs = await this.getDocuments();
        docs.push(doc);
        await storage.set('documents', docs);
    },

    async getDocuments() {
        return (await storage.get('documents')) || [];
    },
};