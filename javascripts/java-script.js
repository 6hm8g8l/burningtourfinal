
$(document).ready(function(){
$(".text3").click(function(){
  setTimeout(function() {
       document.location.href = "./index1.html";
     }, 1999);
    // document.location.href = "file:///Users/tetimofeev/Desktop/shablon-master/index1.html";
    $(".b").css("animation-play-state", "running");

});
$( ".sob1" ).hover(
  function() {
    $( this ).css("color", "white");
    $( ".mag2" ).css("color", "#C52727");
    $( ".about2" ).css("color", "#C52727");
    $( ".block" ).css("background-color", "#C52727");
    $( ".map2" ).css("color", "#C52727");
    $( ".concept2" ).css("color", "#C52727");
    $( ".floors2" ).css("color", "#C52727");
  }, function() {
    $( this ).css("color", "#C52727");
    $( ".mag2" ).css("color", "white");
    $( ".about2" ).css("color", "white");
    $( ".block" ).css("background-color", "white");
    $( ".map2" ).css("color", "white");
    $( ".concept2" ).css("color", "white");
    $( ".floors2" ).css("color", "white");
  }
);
$(".sob1").click(function(){
       document.location.href = "./index2.html";

});
$( ".about1" ).hover(
  function() {
    $( this ).css("color", "white");
    $( ".sob2" ).css("color", "#C52727");
    $( ".mag2" ).css("color", "#C52727");
  }, function() {
    $( this ).css("color", "#C52727");
    $( ".mag2" ).css("color", "white");
    $( ".sob2" ).css("color", "white");
  }
);
$( ".mag1" ).hover(
  function() {
    $( this ).css("color", "white");
    $( ".sob2" ).css("color", "#C52727");
    $( ".about2" ).css("color", "#C52727");
    $( ".block" ).css("background-color", "#C52727");
    $( ".map2" ).css("color", "#C52727");
    $( ".concept2" ).css("color", "#C52727");
    $( ".floors2" ).css("color", "#C52727");
  }, function() {
    $( this ).css("color", "#C52727");
    $( ".sob2" ).css("color", "white");
    $( ".about2" ).css("color", "white");
    $( ".block" ).css("background-color", "white");
    $( ".map2" ).css("color", "white");
    $( ".concept2" ).css("color", "white");
    $( ".floors2" ).css("color", "white");
  }
);
$(".about1").click(function(){
       document.location.href = "./index1.html";

});
$(".mag1").click(function(){
       document.location.href = "./index4.html";

});

let count = false;
$(".about2").click(function () {
            if (count) {
              count = false;
              $(".about2").click(function () {
                          $(".mag").css("top","17.5%");
                          $(".block, .concept, .map, .floors").css("display", "none");
                          });
            }
            else {
              count = true;
              $(".about2").click(function(){
                  $(".mag").css("top","34.5%");
                  $(".block, .concept, .map, .floors").css("display", "block");
              });
            };
            });

            $( ".concept1" ).hover(
              function() {
                $( this ).css("color", "white");
                $( ".map2" ).css("color", "#C52727");
                $( ".floors2" ).css("color", "#C52727");
              }, function() {
                $( this ).css("color", "#C52727");
                $( ".map2" ).css("color", "white");
                $( ".floors2" ).css("color", "white");
              }
            );
            $(".concept1").click(function(){
                   document.location.href = "./index5.html";

            });

            $( ".map1" ).hover(
              function() {
                $( this ).css("color", "white");
                $( ".concept2" ).css("color", "#C52727");
                $( ".floors2" ).css("color", "#C52727");
              }, function() {
                $( this ).css("color", "#C52727");
                $( ".concept2" ).css("color", "white");
                $( ".floors2" ).css("color", "white");
              }
            );

            $( ".floors1" ).hover(
              function() {
                $( this ).css("color", "white");
                $( ".concept2" ).css("color", "#C52727");
                $( ".map2" ).css("color", "#C52727");
              }, function() {
                $( this ).css("color", "#C52727");
                $( ".concept2" ).css("color", "white");
                $( ".map2" ).css("color", "white");
              }
            );
            $(".map1").click(function(){
                   document.location.href = "./index6.html";

            });
            $(".floors1").click(function(){
                   document.location.href = "./index7.html";

            });

            $(function() {
	$(".pic1, .pic2, .pic3, .pic4, .pic5, .pic6, .pic7, .pic8").draggable();
});


$( ".block11" ).hover(
  function() {
    $(".descript1").css("display", "block");
    $(".p11").css("display", "block");
    $(".p11").css("animation-play-state", "running");
    $(".p11").css("z-index", 2);
    $(".block1").css("z-index", 3);
    $(".block11").css("z-index", 3);
    setTimeout(function() {
         $(".p11").css("animation-play-state", "paused");
       }, 1499);
       setTimeout(function() {
            $(".p11").css("animation", "pics 1500ms linear infinite");
            $(".p11").css("animation-play-state", "paused");
          }, 1500);
  }, function() {
    $(".descript1").css("display", "none");
    $(".p11").css("animation-play-state", "running");
    setTimeout(function() {
      $(".p11").css("display", "none");
         $(".p11").css("animation-play-state", "paused");
         $(".p11").css("z-index", 1);
         $(".block1").css("z-index", 1);
         $(".block11").css("z-index", 1);
       }, 1499);
       setTimeout(function() {
            $(".p11").css("animation", "pic 1500ms linear infinite");
            $(".p11").css("animation-play-state", "paused");
          }, 1500);
      });

      $( ".block33" ).hover(
        function() {
          $(".descript5").css("display", "block");
          $(".p22").css("display", "block");
          $(".p22").css("animation-play-state", "running");
          $(".p22").css("z-index", 2);
          $(".block3").css("z-index", 3);
          $(".block33").css("z-index", 3);
          setTimeout(function() {
               $(".p22").css("animation-play-state", "paused");
             }, 1499);
             setTimeout(function() {
                  $(".p22").css("animation", "pics 1500ms linear infinite");
                  $(".p22").css("animation-play-state", "paused");
                }, 1500);
        }, function() {
          $(".descript5").css("display", "none");
          $(".p22").css("animation-play-state", "running");
          setTimeout(function() {
            $(".p22").css("display", "none");
               $(".p22").css("animation-play-state", "paused");
               $(".p22").css("z-index", 1);
               $(".block3").css("z-index", 1);
               $(".block33").css("z-index", 1);
             }, 1499);
             setTimeout(function() {
                  $(".p22").css("animation", "pic 1500ms linear infinite");
                  $(".p22").css("animation-play-state", "paused");
                }, 1500);
            });

            $( ".block22" ).hover(
              function() {
                $(".descript9").css("display", "block");
                $(".p33").css("display", "block");
                $(".p33").css("animation-play-state", "running");
                $(".p33").css("z-index", 2);
                $(".block2").css("z-index", 3);
                $(".block22").css("z-index", 3);
                setTimeout(function() {
                     $(".p33").css("animation-play-state", "paused");
                   }, 999);
                   setTimeout(function() {
                        $(".p33").css("animation", "pic1 1000ms linear infinite");
                        $(".p33").css("animation-play-state", "paused");
                      }, 1000);
              }, function() {
                $(".descript9").css("display", "none");
                $(".p33").css("animation-play-state", "running");
                setTimeout(function() {
                     $(".p33").css("animation-play-state", "paused");
                     $(".p33").css("z-index", 1);
                     $(".block2").css("z-index", 1);
                     $(".block22").css("z-index", 1);
                     $(".p33").css("display", "none");
                   }, 999);
                   setTimeout(function() {
                        $(".p33").css("animation", "pics1 1000ms linear infinite");
                        $(".p33").css("animation-play-state", "paused");
                      }, 1000);
                  });

                  $( ".block44" ).hover(
                    function() {
                      $(".descript7").css("display", "block");
                      $(".p44").css("display", "block");
                      $(".p44").css("animation-play-state", "running");
                      $(".p44").css("z-index", 2);
                      $(".block4").css("z-index", 3);
                      $(".block44").css("z-index", 3);
                      setTimeout(function() {
                           $(".p44").css("animation-play-state", "paused");
                         }, 999);
                         setTimeout(function() {
                              $(".p44").css("animation", "pic1 1000ms linear infinite");
                              $(".p44").css("animation-play-state", "paused");
                            }, 1000);
                    }, function() {
                      $(".descript7").css("display", "none");
                      $(".p44").css("animation-play-state", "running");
                      setTimeout(function() {
                           $(".p44").css("animation-play-state", "paused");
                           $(".p44").css("z-index", 1);
                           $(".block4").css("z-index", 1);
                           $(".block44").css("z-index", 1);
                           $(".p44").css("display", "none");
                         }, 999);
                         setTimeout(function() {
                              $(".p44").css("animation", "pics1 1000ms linear infinite");
                              $(".p44").css("animation-play-state", "paused");
                            }, 1000);
                        });
                        $( ".block55" ).hover(
                          function() {
                            $(".descript3").css("display", "block");
                            $(".p55").css("display", "block");
                            $(".p55").css("animation-play-state", "running");
                            $(".p55").css("z-index", 2);
                            $(".block5").css("z-index", 3);
                            $(".block55").css("z-index", 3);
                            setTimeout(function() {
                                 $(".p55").css("animation-play-state", "paused");
                               }, 1499);
                               setTimeout(function() {
                                    $(".p55").css("animation", "pics 1500ms linear infinite");
                                    $(".p55").css("animation-play-state", "paused");
                                  }, 1500);
                          }, function() {
                            $(".descript3").css("display", "none");
                            $(".p55").css("animation-play-state", "running");
                            setTimeout(function() {
                                 $(".p55").css("animation-play-state", "paused");
                                 $(".p55").css("z-index", 1);
                                 $(".block5").css("z-index", 1);
                                 $(".block55").css("z-index", 1);
                                 $(".p55").css("display", "none");
                               }, 1499);
                               setTimeout(function() {
                                    $(".p55").css("animation", "pic 1500ms linear infinite");
                                    $(".p55").css("animation-play-state", "paused");
                                  }, 1500);
                              });

                              $( ".block66" ).hover(
                                function() {
                                  $(".descript2").css("display", "block");
                                  $(".p66").css("display", "block");
                                  $(".p66").css("animation-play-state", "running");
                                  $(".p66").css("z-index", 2);
                                  $(".block6").css("z-index", 3);
                                  $(".block66").css("z-index", 3);
                                  setTimeout(function() {
                                       $(".p66").css("animation-play-state", "paused");
                                     }, 1499);
                                     setTimeout(function() {
                                          $(".p66").css("animation", "pics 1500ms linear infinite");
                                          $(".p66").css("animation-play-state", "paused");
                                        }, 1500);
                                }, function() {
                                  $(".descript2").css("display", "none");
                                  $(".p66").css("animation-play-state", "running");
                                  setTimeout(function() {
                                       $(".p66").css("animation-play-state", "paused");
                                       $(".p66").css("z-index", 1);
                                       $(".block6").css("z-index", 1);
                                       $(".block66").css("z-index", 1);
                                       $(".p66").css("display", "none");
                                     }, 1499);
                                     setTimeout(function() {
                                          $(".p66").css("animation", "pic 1500ms linear infinite");
                                          $(".p66").css("animation-play-state", "paused");
                                        }, 1500);
                                    });

                                    $( ".block77" ).hover(
                                      function() {
                                        $(".descript4").css("display", "block");
                                        $(".p77").css("display", "block");
                                        $(".p77").css("animation-play-state", "running");
                                        $(".p77").css("z-index", 2);
                                        $(".block7").css("z-index", 3);
                                        $(".block77").css("z-index", 3);
                                        setTimeout(function() {
                                             $(".p77").css("animation-play-state", "paused");
                                           }, 1499);
                                           setTimeout(function() {
                                                $(".p77").css("animation", "pics 1500ms linear infinite");
                                                $(".p77").css("animation-play-state", "paused");
                                              }, 1500);
                                      }, function() {
                                        $(".descript4").css("display", "none");
                                        $(".p77").css("animation-play-state", "running");
                                        setTimeout(function() {
                                             $(".p77").css("animation-play-state", "paused");
                                             $(".p77").css("z-index", 1);
                                             $(".block7").css("z-index", 1);
                                             $(".block77").css("z-index", 1);
                                             $(".p77").css("display", "none");
                                           }, 1499);
                                           setTimeout(function() {
                                                $(".p77").css("animation", "pic 1500ms linear infinite");
                                                $(".p77").css("animation-play-state", "paused");
                                              }, 1500);
                                          });

                                          $( ".block88" ).hover(
                                            function() {
                                              $(".descript6").css("display", "block");
                                              $(".p88").css("display", "block");
                                              $(".p88").css("animation-play-state", "running");
                                              $(".p88").css("z-index", 2);
                                              $(".block8").css("z-index", 3);
                                              $(".block88").css("z-index", 3);
                                              setTimeout(function() {
                                                   $(".p88").css("animation-play-state", "paused");
                                                 }, 999);
                                                 setTimeout(function() {
                                                      $(".p88").css("animation", "pic1 1000ms linear infinite");
                                                      $(".p88").css("animation-play-state", "paused");
                                                    }, 1000);
                                            }, function() {
                                              $(".descript6").css("display", "none");
                                              $(".p88").css("animation-play-state", "running");
                                              setTimeout(function() {
                                                   $(".p88").css("animation-play-state", "paused");
                                                   $(".p88").css("z-index", 1);
                                                   $(".block8").css("z-index", 1);
                                                   $(".block88").css("z-index", 1);
                                                   $(".p88").css("display", "none");
                                                 }, 999);
                                                 setTimeout(function() {
                                                      $(".p88").css("animation", "pics1 1000ms linear infinite");
                                                      $(".p88").css("animation-play-state", "paused");
                                                    }, 1000);
                                                });

                                                $( ".block99" ).hover(
                                                  function() {
                                                    $(".descript8").css("display", "block");
                                                    $(".p99").css("display", "block");
                                                    $(".p99").css("animation-play-state", "running");
                                                    $(".p99").css("z-index", 2);
                                                    $(".block9").css("z-index", 3);
                                                    $(".block99").css("z-index", 3);
                                                    setTimeout(function() {
                                                         $(".p99").css("animation-play-state", "paused");
                                                       }, 999);
                                                       setTimeout(function() {
                                                            $(".p99").css("animation", "pic1 1000ms linear infinite");
                                                            $(".p99").css("animation-play-state", "paused");
                                                          }, 1000);
                                                  }, function() {
                                                    $(".descript8").css("display", "none");
                                                    $(".p99").css("animation-play-state", "running");
                                                    setTimeout(function() {
                                                         $(".p99").css("animation-play-state", "paused");
                                                         $(".p99").css("z-index", 1);
                                                         $(".block9").css("z-index", 1);
                                                         $(".block99").css("z-index", 1);
                                                         $(".p99").css("display", "none");
                                                       }, 999);
                                                       setTimeout(function() {
                                                            $(".p99").css("animation", "pics1 1000ms linear infinite");
                                                            $(".p99").css("animation-play-state", "paused");
                                                          }, 1000);
                                                      });

// import { GLTFLoader } from './GLTFLoader.js'
// let scene;
// let camera;
// let renderer;
// function init(){
//   let container = document.querySelector('.container');
//   //scene
//   scene = new THREE.Scene()
//   scene.background = new THREE.Color(0xffffff);
//   //camera
//   camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000)
//   //renderer
//   renderer = new THREE.WebGLRenderer({antialias: true})
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   container.appendChild(renderer.domElement)
//   //model
//   {
//            let loader = new GLTFLoader();
//            loader.load('./model/scene.gltf', gltf => {
//            scene.add(gltf.scene);
//            },
//                function (error) {
//                    console.log('Error: ' + error)
//                }
//            )
//        }
//
//   function animate(){
//     requestAnimationFrame(animate)
//     renderer.render(scene, camera)
//   }
//   animate()
// }
// init()
// import { GLTFLoader } from './GLTFLoader.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.102.0/examples/js/loaders/GLTFLoader.js';

// response.setHeader("Access-Control-Allow-Origin", "null");
// console.log(10);



// const loader = new THREE.GLTFLoader();
//
// // const loader = new GLTFLoader();
//
//
// loader.load( './../img/pzdc.gltf', function ( gltf ) {
//
// 	scene.add( gltf.scene );
//
// }, undefined, function ( error ) {
//
// 	console.error( error );
//
// } );



//
// var req = new XMLHttpRequest();
// req.open('GET', document.location, false);
// req.send(null);
// var headers = req.getAllResponseHeaders().toLowerCase();
// alert(headers);


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
//
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0xC52727 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
//
// camera.position.z = 5;
//
// function animate() {
//   requestAnimationFrame( animate );
//
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//
//   renderer.render( scene, camera );
// };
//
// animate();

$( ".rect1" ).hover(
  function() {
    $(".rect11").css("display", "none");
    $(".item1").css("display", "none");
  }, function() {
    $(".rect11").css("display", "block");
    $(".item1").css("display", "block");
      });

      $( ".rect2" ).hover(
        function() {
          $(".rect22").css("display", "none");
          $(".item2").css("display", "none");
        }, function() {
          $(".rect22").css("display", "block");
          $(".item2").css("display", "block");
            });

            $( ".rect3" ).hover(
              function() {
                $(".rect33").css("display", "none");
                $(".item3").css("display", "none");
              }, function() {
                $(".rect33").css("display", "block");
                $(".item3").css("display", "block");
                  });

                  $( ".rect4" ).hover(
                    function() {
                      $(".rect44").css("display", "none");
                      $(".item4").css("display", "none");
                    }, function() {
                      $(".rect44").css("display", "block");
                      $(".item4").css("display", "block");
                        });

                  $( ".rect5" ).hover(
                    function() {
                      $(".rect55").css("display", "none");
                      $(".item5").css("display", "none");
                    }, function() {
                      $(".rect55").css("display", "block");
                      $(".item5").css("display", "block");
                        });

                        $( ".rect6" ).hover(
                          function() {
                            $(".rect66").css("display", "none");
                            $(".item6").css("display", "none");
                          }, function() {
                            $(".rect66").css("display", "block");
                            $(".item6").css("display", "block");
                              });

                              $( ".rect7" ).hover(
                                function() {
                                  $(".rect77").css("display", "none");
                                  $(".item7").css("display", "none");
                                }, function() {
                                  $(".rect77").css("display", "block");
                                  $(".item7").css("display", "block");
                                    });

                              $( ".rect8" ).hover(
                                function() {
                                  $(".rect88").css("display", "none");
                                  $(".item8").css("display", "none");
                                }, function() {
                                  $(".rect88").css("display", "block");
                                  $(".item8").css("display", "block");
                                    });

                                    $( ".rect9" ).hover(
                                      function() {
                                        $(".rect99").css("display", "none");
                                        $(".item9").css("display", "none");
                                      }, function() {
                                        $(".rect99").css("display", "block");
                                        $(".item9").css("display", "block");
                                          });

  });
