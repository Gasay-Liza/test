$(function () {
    $("#js-register-form").validate({
      focusCleanup: true,
      focusInvalid: false,
  
      rules: {
        form_name: {
          required: true
        },
  
        form_tel: {
          required: true,
          digits: true
        }
      }
  
    });
  });
  
  /*
   * Translated default messages for the jQuery validation plugin.
   * Locale: RU (Russian; русский язык)
   */
  $.extend($.validator.messages, {
    required: "Это поле необходимо заполнить.",
    remote: "Пожалуйста, введите правильное значение.",
    email: "Пожалуйста, введите корректный адрес электронной почты.",

    maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
    minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
    rangelength: $.validator.format(
      "Пожалуйста, введите значение длиной от {0} до {1} символов."
    ),
    range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
    max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
    min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
  });
  