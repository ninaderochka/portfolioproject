tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        noto: ["Noto-Sans", "mono"],
        arapey: ["Arapey", "san serif"],
      },
      fontSize: {
        '8xl': '15rem',
        '9xl': '16rem',
    },

    },
    transitionProperty: {
      'height': 'height',
      'spacing': 'margin, padding',
    },
      colors: {
        y: "#EEEA89",
        p: "#AB72BF",
        b: "#343434",
        w: "#F2F2F2",

      },

      // backgroundImage: {
      //   overlay: "url(./nordwood-themes-R53t-Tg6J4c-unsplash.jpg')",
      // },

      animation: {
        bounceLow: "new_bounce 1s ease-in-out infinite alternate",

        blob: "new_blob 10s ease-in-out infinite",
        
      },
      

      keyframes: {
        new_bounce: {
          "0%": {
            transform: "translateY(-1%)",
          },
          "100%": {
            transform: "translateY(1%)",
          },
        },

         new_blob: {
              "0%": {
                transform: "translate(0px, 0px) scale(1)",
             
                },
               "33%": {
                  transform: "translate(5px, -100px) scale(1.1) ",
                  },
               "66%": {
                  transform: "translate(-50px, 200px) scale(1)",
                  },

                "100%": {
                   transform: "translate(0px, 0px) scale(1)",
                  },
  
            }
          },
     
        },

    
      }