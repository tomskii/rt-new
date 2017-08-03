$(function () {
  $('#countryselectorRenewals').val('');
  $("#countriesRenewals").submit(function (event) {
    var selectValue = $('#countryselectorRenewals').val();
    if (_.includes(['Hong Kong', 'Japan', 'Malaysia', 'Singapore',
          'Korea, Republic of', 'Taiwan', 'Brunei Darussalam', 'Israel', 'Canada', 'United States', 'Argentina',
          'Belize', 'Brazil', 'Chile', 'El Salvador', 'Guatemala', 'Honduras', 'Mexico',
          'Nicaragua', 'Panama', 'Paraguay', 'Uruguay', 'Australia', 'New Zealand'], selectValue)){
      window.location.href = '/renewals-it4/passport-number.html';
      event.preventDefault();
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

$(function ($) {
  $('#countryselectorUpdates').val('');
  $("#countriesUpdates").submit(function (event) {
    var selectValue = $('#countryselectorUpdates').val();
    if (_.includes(['Hong Kong', 'Japan', 'Malaysia', 'Singapore',
          'Korea, Republic of', 'Taiwan', 'Brunei Darussalam', 'Israel', 'Canada', 'United States', 'Argentina',
          'Belize', 'Brazil', 'Chile', 'El Salvador', 'Guatemala', 'Honduras', 'Mexico',
          'Nicaragua', 'Panama', 'Paraguay', 'Uruguay', 'Australia', 'New Zealand'], selectValue)){
      window.location.href = '/renewals-it4/update-scenario/passport-number.html';
      //window.location.href = '/renewals-it4/update-scenario/summary.html';
      event.preventDefault();
    } else if (_.includes([''], selectValue)){
      $(".countryHint").addClass('red');
      $(".countryHinttext").show();
    } else {
      window.location.href = '/renewals-it4/ineligible.html';
      event.preventDefault();
    }
  });
  $('select').selectToAutocomplete();
});
