import createApiClient from "./api.service";
class ContactService {
constructor(baseUrl = "/api/contacts") {
this.api = createApiClient(baseUrl);
} a
sync getAll() {
return (await this.api.get("/")).data;
} a
sync create(data) {
return (await this.api.post("/", data)).data;
} a
sync deleteAll() {
return (await this.api.delete("/")).data;
} a
sync get(id) {
return (await this.api.get(`/${id}`)).data;
} a
sync update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    } a
    sync delete(id) {
    return (await this.api.delete(`/${id}`)).data;
    }
    } e
    xport default new ContactService();