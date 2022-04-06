function staticDraw(context, image, time, ...args) {
  context.save();

  context.drawImage.apply(context, [image, ...args]);

  context.restore();
}

export {staticDraw};
