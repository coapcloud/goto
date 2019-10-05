"use strict";

module.exports = (event, context) => {
  let redirect;

  if (event.path == "/home") {
    redirect = "https://coap.cloud";
  } else if (event.path == "/github") {
    redirect = "https://github.com/coapcloud";
  }

  if (!redirect) {
    return context.status(400).fail("Unknown short URL");
  }

  context
    .status(302)
    .headers({ location: redirect })
    .succeed();
};
