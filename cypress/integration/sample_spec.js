describe("testing the portfolio site", () => {
    //test
    //still a WOP
    beforeEach(() => {});
    it("has the right text", () => {
        cy.visit("https://adam-basila.surge.sh/#/");
        cy.get(".header-text").contains("ADAM BASILA | WEB DEVELOPER");
        cy.get(".textstuff").contains("Welcome to my portfolio page.");
        cy.get(".textstuff").contains(
            "Feel free to contact me with feedback and questions."
        );
    });
    it("tests the links in b-button group", () => {
        cy.get(".links")
            .contains("GitHub")
            .should("have.attr", "href", "https://github.com/optimoosecrime");
        cy.get(".links")
            .contains("LinkedIn")
            .should("have.attr", "href", "https://www.linkedin.com/in/adamdoesdev/");
        cy.get(".links")
            .contains("Resume")
            .should(
                "have.attr",
                "href",
                "https://drive.google.com/open?id=1l92nA3Mk1d6az_8ZuPfz4mv8wgh1ysLT"
            );
        cy.get(".links")
            .contains("Email Me")
            .should("have.attr", "href", "mailto:adamcbasila@gmail.com");
    });
    it("tests the routes", () => {
        cy.get(".routers")
            .contains("About")
            .click()
            .url()
            .should("include", "/About");
        cy.get(".routers")
            .contains("Projects")
            .click()
            .url()
            .should("include", "/Projects");
        cy.get("div").contains("Skilyft");
        cy.get("button")
            .contains("More Info")
            .click();
        cy.get("button")
            .contains("Close Me")
            .click();
    });
});