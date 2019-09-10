window.onload = function() {
  const body = document.querySelector("body");

  const imgNames = [
    "batmanwb.png",
    "flashwb.png",
    "supermanwb.png",
    "wonder_womanwb.png"
  ];

  let imageActivation;

  const isInactive = (textToReplace, changeTo) => {
    imageActivation = function() {
      const newSrc = event.target.src.replace(textToReplace, changeTo);
      event.target.src = newSrc;
    };

    return imageActivation;
  };

  imgNames.forEach(name => {
    const img = document.createElement("img");
    img.src = `./img/${name}`;
    img.addEventListener("mouseover", isInactive("wb", ""));
    img.addEventListener("mouseout", isInactive(".png", "wb.png"));
    body.append(img);
  });
};
