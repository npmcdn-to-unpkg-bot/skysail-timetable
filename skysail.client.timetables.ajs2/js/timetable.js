//pre-populate course info in different fields of modal form

$('#sendMessage').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var courseinfo = button.data('whatever') // Extract info from data-* attributes
  var modal = $(this)
  var ci = modal.find('#courseinfo');
  ci.val('Ihr Kurs '+courseinfo);
});

$('#subscribeCourse').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var requestedcourse = button.data('whatever') // Extract info from data-* attributes
  var modal = $(this)
  var sc = modal.find('#subscribeCourseTitle');
  sc.text('Kurs '+requestedcourse+" abonnieren");
})

// Clear form fields in a designated area of a page
$.clearFormFields = function(area) {
              $(area).find('#courseinfo').val('');
              $(area).find('#message').val("");
          };

$('#sendMessage').on('hidden.bs.modal', function(){
$.clearFormFields(this)
});

//set tooltips
$('[data-tooltip="tooltip"]').tooltip();
