export default {
  validate(prop, value) {
    var errors = [];
    value = value || "";

    switch (prop) {
      case "title":
        if (value.trim().length === 0) {
          errors.push("The title is required");
        }
        if (value.trim().length > 128) {
          errors.push("The title is too long");
        }
        break;

      case "year":
        if (!+value) {
          errors.push("The movie needs a release year");
        }

        if (+value < 1845) {
          errors.push(
            "The movie can't be released before the camera was invented"
          );
        }

        if (+value > new Date().getFullYear()) {
          errors.push("The movie can't be released in the future");
        }
        break;

      case "ratings.criticsScore":
        if (+value <= 0) {
          errors.push("The score must be bigger than zero");
        }
        if (+value > 100) {
          errors.push("The score must be less or equal to 100");
        }
        break;

      case "ratings.audienceScore":
        if (+value <= 0) {
          errors.push("The score must be bigger than zero");
        }
        if (+value > 100) {
          errors.push("The score must be less or equal to 100");
        }
        break;
      default:
        break;
    }

    return errors;
  }
};
