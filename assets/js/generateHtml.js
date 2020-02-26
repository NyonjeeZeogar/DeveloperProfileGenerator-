const colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "#black"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white"
    }
  };
  
  function generateHTML(response, userColor) {
    return `<!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
          <link rel ="stylesheet " href="assets/css/style.css">
          <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
          
          <title>Developer Profile Generator</title>
    
        </head>
          <body>
          <div class="wrapper">
          <div class="main">
            <div class="row">
              <div class="col">
                <div class="photo-header">
                  <img class="photo-heager" src="https://avatars2.githubusercontent.com/u/54722046?s=460&v=4"></img>
                    <h1 class="photo-header">Hi!</h1>
                      <h2 class="photo-header">My name is Nyonjee Zeogar</h2>
                      <div class="row">
                      <nav class="links-nav">
                      <a class="nav-link" id="location" href="https://www.google.com/maps/place/Minnesota/@46.3540035,-97.8490966,6z/data=!3m1!4b1!4m5!3m4!1s0x4d585b9a60780b9b:0x2a2c99b10fea20f!8m2!3d46.729553!4d-94.6858998"><h6><i class="fas fa-location-arrow"></i>Minnesota</h6></a>
                      <a class="nav-link" id="GitHub" href="https://github.com/NyonjeeZeogar"><h6><i class="fab fa-github"></i>GitHub</h6></a>
                    <a class="nav-link" id="Portfolio" href="https://nyonjeezeogar.github.io/Updated-Portfolio/"><h6><i class="fas fa-rss-square"></i>Blog</h6></a>
                  </nav>
                </div>
              </div>
            </div>
            </div>
            </div>
              <div class="container">
                <div class="workExp-date"><h2>Software Engineer
    </h2></div>
                  <div class="row">
                    <div class="col">
                      <div class="card"><h2>Public Repositories</h2>
                          <h4>15</h4>
                            </div>
                              <div class="card"><h2>GitHub Stars</h2>
                              <h4>1</h4>
                              </div>
                              </div>
                            <div class="col">
                          <div class="card"><h2>Followers</h2>
                        <h4>1</h4>
                      </div>
                    <div class="card"><h2>Following</h2>
                  <h4>0</h4>
                </div>
              </div>
            </div>
          </div>
        <div class="wrapper"></div>
      </div>
    </body>
    </html>`
          }
  
          module.exports = generateHTML;