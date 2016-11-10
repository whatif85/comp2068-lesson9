/**
 * Created by RFreeman on 10/13/2016.
 */
$('.confirmation').on('click', function() {
    return confirm('Are you sure you want to delete this?');
});

// use jquery validator to ensure equal when registering using # because of id
var validator = $('#registerForm').validate(
  {
    rules:
    {
      confirm: // from register.ejs
      {
        required: true,
        equalTo: '#password'
      }
    },
    messages:
    {
      confirm:
      {
        equalTo: 'Your passwords do not match'
      }
    }
  });
