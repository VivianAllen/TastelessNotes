document.getElementById("pageUnderTest").onload =
function(){describe('Front End (Main Page)', function() {
  describe('Page elements', function() {
    it('Has a title called "Tasteless Notes"', function() {
      return expect('header').toContainHtmlContent('Tasteless Notes')
    })

    it('Has a form input element', function() {
      return expect('note_input').toBeHtmlElement();
    });

    it('Has a submit button element', function() {
      return expect('create_note').toBeHtmlElement();
    });

    it('Has a notes list element', function() {
      return expect('notes_table').toBeHtmlElement();
    });

  });

  describe('Page interactivity', function() {
    it('should be able to fill in and create a new form', function() {
      helpers.fillInForm('note_input', 'My First Note');
      helpers.clickObject('create_note');
      return expect('notes_table').toContainHtmlContent('My First Note');
    });

    it('should not show "big_note" initially', function() {
      return expect('big_note').toNotBeVisible();
    });

    it('should be able to click on a list to show the "big_note" div', function() {
      helpers.clickObject('note_0');
      return expect('big_note').toBeVisible();
    });

    it('should be able to click on a list to hide the "form_div" div', function() {
      helpers.clickObject('note_0');
      return expect('form_div').toNotBeVisible();
    });

    it('should be able to click on a list to hide the "list_div" div', function() {
      helpers.clickObject('note_0');
      return expect('list_div').toNotBeVisible();
    });

    it('should be able to click on back button to hide the "big_note" div', function() {
      helpers.clickObject('note_0');
      helpers.clickObject('back_button');
      return expect('big_note').toNotBeVisible();
    });

    it('should be able to click on back button to show the "form_div" div', function() {
      helpers.clickObject('note_0');
      helpers.clickObject('back_button');
      return expect('form_div').toBeVisible();
    });

    it('should be able to click on back button to show the "list_div" div', function() {
      helpers.clickObject('note_0');
      helpers.clickObject('back_button');
      return expect('list_div').toBeVisible();
    });

    it('should replace the form with body of the note', function() {
      helpers.fillInForm('note_input', 'My Second Note');
      helpers.clickObject('create_note');
      helpers.clickObject('note_1');
      return expect('note_body_text').toContainHtmlContent('My Second Note');
    });
  });

  describe('Note edit and delete', function() {
    it('should be able to delete an existing note', function() {
      helpers.clickObject('back_button');
      helpers.fillInForm('note_input', 'My Note To Delete');
      helpers.clickObject('create_note');
      helpers.clickObject('del_2');
      return expect('note_2').toNotBeHtmlElement('note_2');
    });
    it('should be able to edit an existing note', function(){
      helpers.fillInForm('note_input', 'My Note To Delete');
      helpers.clickObject('create_note');
      helpers.clickObject('edit_2');
      helpers.fillInForm('note_edit_text', 'New Note Text');
      helpers.clickObject('submit_note_edit');
      return expect('note_2').toContainHtmlContent('New Note Text');
    });
  });

});
};
