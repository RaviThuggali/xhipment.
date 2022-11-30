cy.get(ListPagePosts.elements.headroomUnfixed).should('be.visible');

describe('Bulk Actions', () => {
    it('should allow to select all items on the current page', () => {
        cy.contains('1-10 of 13'); // wait for data
        ListPagePosts.toggleSelectAll();
        cy.get(ListPagePosts.elements.bulkActionsToolbar).should('exist');
        cy.contains('10 items selected');
        cy.get(ListPagePosts.elements.selectedItem).should(els =>
            expect(els).to.have.length(10)
        );
    });