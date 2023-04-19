export const preloadImages = (images) => {
        console.log("gets heree")
        images.forEach((image) => {
          const img = new Image()
          img.src = image
        })
  }