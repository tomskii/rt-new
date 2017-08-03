$(function () {
  $('#countryselector').val('');
  $("#countries").submit(function (event) {
    var selectValue = $('#countryselector').val();
    if (_.includes(['Hong Kong', 'Japan', 'Malaysia', 'Singapore',
          'Korea, Republic of', 'Taiwan', 'Brunei Darussalam', 'Israel', 'Canada', 'United States', 'Argentina',
          'Belize', 'Brazil', 'Chile', 'El Salvador', 'Guatemala', 'Honduras', 'Mexico',
          'Nicaragua', 'Panama', 'Paraguay', 'Uruguay', 'Australia', 'New Zealand'], selectValue)){
      // window.location.href = 'why-are-you-coming.html';
      // window.location.href = 'summary.html';
      // event.preventDefault();
    } else if (_.includes([''], selectValue)){
      $(".countryHint").addClass('red');
      $(".countryHinttext").show();
      event.preventDefault();
    } else {
      window.location.href = 'ineligible.html';
      event.preventDefault();
    }
  });

  $('#countryselectorRenewals').val('');
  $("#countriesRenewals").submit(function (event) {
    var selectValue = $('#countryselectorRenewals').val();
    if (_.includes(['Hong Kong', 'Japan', 'Malaysia', 'Singapore',
          'Korea, Republic of', 'Taiwan', 'Brunei Darussalam', 'Israel', 'Canada', 'United States', 'Argentina',
          'Belize', 'Brazil', 'Chile', 'El Salvador', 'Guatemala', 'Honduras', 'Mexico',
          'Nicaragua', 'Panama', 'Paraguay', 'Uruguay', 'Australia', 'New Zealand'], selectValue)){
    } else if (_.includes([''], selectValue)){
      $(".countryHint").addClass('red');
      $(".countryHinttext").show();
      event.preventDefault();
    } else {
      window.location.href = '/renewals-it4/ineligible.html';
      event.preventDefault();
    }
  });

  $('#countryselectorUpdates').val('');
  $("#countriesUpdates").submit(function (event) {
    var selectValue = $('#countryselectorUpdates').val();
    if (_.includes(['Hong Kong', 'Japan', 'Malaysia', 'Singapore',
          'Korea, Republic of', 'Taiwan', 'Brunei Darussalam', 'Israel', 'Canada', 'United States', 'Argentina',
          'Belize', 'Brazil', 'Chile', 'El Salvador', 'Guatemala', 'Honduras', 'Mexico',
          'Nicaragua', 'Panama', 'Paraguay', 'Uruguay', 'Australia', 'New Zealand'], selectValue)){
      // window.location.href = '/renewals-it4/update-scenario/passport-number.html';
      //window.location.href = '/renewals-it4/update-scenario/summary.html';
      // event.preventDefault();
    } else if (_.includes([''], selectValue)){
      $(".countryHint").addClass('red');
      $(".countryHinttext").show();
      event.preventDefault();
    } else {
      window.location.href = '/renewals-it4/ineligible.html';
      event.preventDefault();
    }
  });
  $('select').selectToAutocomplete();
});
