describe('Scenario Verifikasi Fungsi API Reqres.in', () => {

    //LIST USERS (Untuk mengambil daftar list user)
    it('TC01 - Get List Users', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",
            headers: {"x-api-key": "reqres_7a32e9dca0cc4fc58ef84c03e5acf57c"}
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.be.an('array');
        });
    });

    //SINGLE USER (Untuk mengambil data detail satu user berdasarkan nomor id=2.)
    it('TC02 - Get Single User', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2",
            headers: {"x-api-key": "reqres_7a32e9dca0cc4fc58ef84c03e5acf57c"},
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('id', 2);
        });
    });

    //SINGLE USER NOT FOUND (Untuk mengetes jika user tidak ditemukan)
    it('TC03 - Get Single User Not Found', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/23",
            failOnStatusCode: false,
            headers: {"x-api-key": "reqres_7a32e9dca0cc4fc58ef84c03e5acf57c"},
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });

    //CREATE USER (Untuk membuat user baru dengan data name dan job.)
    it('TC04 - Create User', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            headers: {"x-api-key": "reqres_7a32e9dca0cc4fc58ef84c03e5acf57c"},
            body: {
                name: "chandro",
                job: "qa"
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', 'chandro');
            expect(response.body).to.have.property('job', 'qa');
        });
    });

    //UPDATE USER (PUT) (Untuk melakukan update data user sepenuhnya)
    it('TC05 - Update User PUT', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            headers: {"x-api-key": "reqres_7a32e9dca0cc4fc58ef84c03e5acf57c"},
            body: {
                name: "chandro",
                job: "senior qa"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq('chandro');
        });
    });

    //UPDATE USER (PATCH) (Untuk melakukan update sebagian data user (partial update))
    it('TC06 - Update User PATCH', () => {
        cy.request({
            method: "PATCH",
            url: "https://reqres.in/api/users/2",
            headers: {"x-api-key": "reqres_7a32e9dca0cc4fc58ef84c03e5acf57c"},
            body: {
                job: "lead qa"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.job).to.eq('lead qa');
        });
    });

    //DELETE USER (Untuk menghapus user)
    it('TC07 - Delete User', () => {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2",
            headers: {"x-api-key": "reqres_7a32e9dca0cc4fc58ef84c03e5acf57c"},
        }).then((response) => {
            expect(response.status).to.eq(204);
        });
    });
});

