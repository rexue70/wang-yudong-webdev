(function () {
    angular
        .module("MovieApp")
        .controller("MovieSearchController", MovieSearchController);
    var counties = [
        {
            "name": "Alameda County"
        },
        {
            "name": "Alpine County"
        },
        {
            "name": "Amador County"
        },
        {
            "name": "Butte County"
        },
        {
            "name": "Calaveras County"
        },
        {
            "name": "Colusa County"
        },
        {
            "name": "Contra Costa County"
        },
        {
            "name": "Del Norte County"
        },
        {
            "name": "El Dorado County"
        },
        {
            "name": "Fresno County"
        },
        {
            "name": "Glenn County"
        },
        {
            "name": "Humboldt County"
        },
        {
            "name": "Imperial County"
        },
        {
            "name": "Inyo County"
        },
        {
            "name": "Kern County"
        },
        {
            "name": "Kings County"
        },
        {
            "name": "Lake County"
        },
        {
            "name": "Lassen County"
        },
        {
            "name": "Los Angeles County"
        },
        {
            "name": "Madera County"
        },
        {
            "name": "Marin County"
        },
        {
            "name": "Mariposa County"
        },
        {
            "name": "Mendocino County"
        },
        {
            "name": "Merced County"
        },
        {
            "name": "Modoc County"
        },
        {
            "name": "Mono County"
        },
        {
            "name": "Monterey County"
        },
        {
            "name": "Napa County"
        },
        {
            "name": "Nevada County"
        },
        {
            "name": "Orange County"
        },
        {
            "name": "Placer County"
        },
        {
            "name": "Plumas County"
        },
        {
            "name": "Riverside County"
        },
        {
            "name": "Sacramento County"
        },
        {
            "name": "San Benito County"
        },
        {
            "name": "San Bernardino County"
        },
        {
            "name": "San Diego County"
        },
        {
            "name": "San Francisco County"
        },
        {
            "name": "San Joaquin County"
        },
        {
            "name": "San Luis Obispo County"
        },
        {
            "name": "San Mateo County"
        },
        {
            "name": "Santa Barbara County"
        },
        {
            "name": "Santa Clara County"
        },
        {
            "name": "Santa Cruz County"
        },
        {
            "name": "Shasta County"
        },
        {
            "name": "Sierra County"
        },
        {
            "name": "Siskiyou County"
        },
        {
            "name": "Solano County"
        },
        {
            "name": "Sonoma County"
        },
        {
            "name": "Stanislaus County"
        },
        {
            "name": "Sutter County"
        },
        {
            "name": "Tehama County"
        },
        {
            "name": "Trinity County"
        },
        {
            "name": "Tulare County"
        },
        {
            "name": "Tuolumne County"
        },
        {
            "name": "Ventura County"
        },
        {
            "name": "Yolo County"
        },
        {
            "name": "Yuba County"
        },
        {
            "name": "Albany County"
        },
        {
            "name": "Allegany County"
        },
        {
            "name": "Bronx County"
        },
        {
            "name": "Broome County"
        },
        {
            "name": "Cattaraugus County"
        },
        {
            "name": "Cayuga County"
        },
        {
            "name": "Chautauqua County"
        },
        {
            "name": "Chemung County"
        },
        {
            "name": "Chenango County"
        },
        {
            "name": "Clinton County"
        },
        {
            "name": "Columbia County"
        },
        {
            "name": "Cortland County"
        },
        {
            "name": "Delaware County"
        },
        {
            "name": "Dutchess County"
        },
        {
            "name": "Erie County"
        },
        {
            "name": "Essex County"
        },
        {
            "name": "Franklin County"
        },
        {
            "name": "Fulton County"
        },
        {
            "name": "Genesee County"
        },
        {
            "name": "Greene County"
        },
        {
            "name": "Hamilton County"
        },
        {
            "name": "Herkimer County"
        },
        {
            "name": "Jefferson County"
        },
        {
            "name": "Lewis County"
        },
        {
            "name": "Livingston County"
        },
        {
            "name": "Madison County"
        },
        {
            "name": "Monroe County"
        },
        {
            "name": "Montgomery County"
        },
        {
            "name": "Nassau County"
        },
        {
            "name": "New York County"
        },
        {
            "name": "Niagara County"
        },
        {
            "name": "Oneida County"
        },
        {
            "name": "Onondaga County"
        },
        {
            "name": "Ontario County"
        },
        {
            "name": "Orleans County"
        },
        {
            "name": "Oswego County"
        },
        {
            "name": "Otsego County"
        },
        {
            "name": "Putnam County"
        },
        {
            "name": "Queens County"
        },
        {
            "name": "Rensselaer County"
        },
        {
            "name": "Richmond County"
        },
        {
            "name": "Rockland County"
        },
        {
            "name": "St. Lawrence County"
        },
        {
            "name": "Saratoga County"
        },
        {
            "name": "Schenectady County"
        },
        {
            "name": "Schoharie County"
        },
        {
            "name": "Schuyler County"
        },
        {
            "name": "Seneca County"
        },
        {
            "name": "Steuben County"
        },
        {
            "name": "Suffolk County"
        },
        {
            "name": "Sullivan County"
        },
        {
            "name": "Tioga County"
        },
        {
            "name": "Tompkins County"
        },
        {
            "name": "Ulster County"
        },
        {
            "name": "Warren County"
        },
        {
            "name": "Washington County"
        },
        {
            "name": "Wayne County"
        },
        {
            "name": "Westchester County"
        },
        {
            "name": "Wyoming County"
        },
        {
            "name": "Yates County"
        },
        {
            "name": "Anderson County"
        },
        {
            "name": "Andrews County"
        },
        {
            "name": "Angelina County"
        },
        {
            "name": "Aransas County"
        },
        {
            "name": "Archer County"
        },
        {
            "name": "Armstrong County"
        },
        {
            "name": "Atascosa County"
        },
        {
            "name": "Austin County"
        },
        {
            "name": "Bailey County"
        },
        {
            "name": "Bandera County"
        },
        {
            "name": "Bastrop County"
        },
        {
            "name": "Baylor County"
        },
        {
            "name": "Bee County"
        },
        {
            "name": "Bell County"
        },
        {
            "name": "Bexar County"
        },
        {
            "name": "Blanco County"
        },
        {
            "name": "Borden County"
        },
        {
            "name": "Bosque County"
        },
        {
            "name": "Bowie County"
        },
        {
            "name": "Brazoria County"
        },
        {
            "name": "Brazos County"
        },
        {
            "name": "Brewster County"
        },
        {
            "name": "Briscoe County"
        },
        {
            "name": "Brooks County"
        },
        {
            "name": "Brown County"
        },
        {
            "name": "Burleson County"
        },
        {
            "name": "Burnet County"
        },
        {
            "name": "Caldwell County"
        },
        {
            "name": "Calhoun County"
        },
        {
            "name": "Callahan County"
        },
        {
            "name": "Cameron County"
        },
        {
            "name": "Camp County"
        },
        {
            "name": "Carson County"
        },
        {
            "name": "Cass County"
        },
        {
            "name": "Castro County"
        },
        {
            "name": "Chambers County"
        },
        {
            "name": "Cherokee County"
        },
        {
            "name": "Childress County"
        },
        {
            "name": "Clay County"
        },
        {
            "name": "Cochran County"
        },
        {
            "name": "Coke County"
        },
        {
            "name": "Coleman County"
        },
        {
            "name": "Collin County"
        },
        {
            "name": "Collingsworth County"
        },
        {
            "name": "Colorado County"
        },
        {
            "name": "Comal County"
        },
        {
            "name": "Comanche County"
        },
        {
            "name": "Concho County"
        },
        {
            "name": "Cooke County"
        },
        {
            "name": "Coryell County"
        },
        {
            "name": "Cottle County"
        },
        {
            "name": "Crane County"
        },
        {
            "name": "Crockett County"
        },
        {
            "name": "Crosby County"
        },
        {
            "name": "Culberson County"
        },
        {
            "name": "Dallam County"
        },
        {
            "name": "Dallas County"
        },
        {
            "name": "Dawson County"
        },
        {
            "name": "Deaf Smith County"
        },
        {
            "name": "Delta County"
        },
        {
            "name": "Denton County"
        },
        {
            "name": "DeWitt County"
        },
        {
            "name": "Dickens County"
        },
        {
            "name": "Dimmit County"
        },
        {
            "name": "Donley County"
        },
        {
            "name": "Duval County"
        },
        {
            "name": "Eastland County"
        },
        {
            "name": "Ector County"
        },
        {
            "name": "Edwards County"
        },
        {
            "name": "Ellis County"
        },
        {
            "name": "El Paso County"
        },
        {
            "name": "Erath County"
        },
        {
            "name": "Falls County"
        },
        {
            "name": "Fannin County"
        },
        {
            "name": "Fayette County"
        },
        {
            "name": "Fisher County"
        },
        {
            "name": "Floyd County"
        },
        {
            "name": "Foard County"
        },
        {
            "name": "Fort Bend County"
        },
        {
            "name": "Freestone County"
        },
        {
            "name": "Frio County"
        },
        {
            "name": "Gaines County"
        },
        {
            "name": "Galveston County"
        },
        {
            "name": "Garza County"
        },
        {
            "name": "Gillespie County"
        },
        {
            "name": "Glasscock County"
        },
        {
            "name": "Goliad County"
        },
        {
            "name": "Gonzales County"
        },
        {
            "name": "Gray County"
        },
        {
            "name": "Grayson County"
        },
        {
            "name": "Gregg County"
        },
        {
            "name": "Grimes County"
        },
        {
            "name": "Guadalupe County"
        },
        {
            "name": "Hale County"
        },
        {
            "name": "Hall County"
        },
        {
            "name": "Hansford County"
        },
        {
            "name": "Hardeman County"
        },
        {
            "name": "Hardin County"
        },
        {
            "name": "Harris County"
        },
        {
            "name": "Harrison County"
        },
        {
            "name": "Hartley County"
        },
        {
            "name": "Haskell County"
        },
        {
            "name": "Hays County"
        },
        {
            "name": "Hemphill County"
        },
        {
            "name": "Henderson County"
        },
        {
            "name": "Hidalgo County"
        },
        {
            "name": "Hill County"
        },
        {
            "name": "Hockley County"
        },
        {
            "name": "Hood County"
        },
        {
            "name": "Hopkins County"
        },
        {
            "name": "Houston County"
        },
        {
            "name": "Howard County"
        },
        {
            "name": "Hudspeth County"
        },
        {
            "name": "Hunt County"
        },
        {
            "name": "Hutchinson County"
        },
        {
            "name": "Irion County"
        },
        {
            "name": "Jack County"
        },
        {
            "name": "Jackson County"
        },
        {
            "name": "Jasper County"
        },
        {
            "name": "Jeff Davis County"
        },
        {
            "name": "Jim Hogg County"
        },
        {
            "name": "Jim Wells County"
        },
        {
            "name": "Johnson County"
        },
        {
            "name": "Jones County"
        },
        {
            "name": "Karnes County"
        },
        {
            "name": "Kaufman County"
        },
        {
            "name": "Kendall County"
        },
        {
            "name": "Kenedy County"
        },
        {
            "name": "Kent County"
        },
        {
            "name": "Kerr County"
        },
        {
            "name": "Kimble County"
        },
        {
            "name": "King County"
        },
        {
            "name": "Kinney County"
        },
        {
            "name": "Kleberg County"
        },
        {
            "name": "Knox County"
        },
        {
            "name": "Lamar County"
        },
        {
            "name": "Lamb County"
        },
        {
            "name": "Lampasas County"
        },
        {
            "name": "La Salle County"
        },
        {
            "name": "Lavaca County"
        },
        {
            "name": "Lee County"
        },
        {
            "name": "Leon County"
        },
        {
            "name": "Liberty County"
        },
        {
            "name": "Limestone County"
        },
        {
            "name": "Lipscomb County"
        },
        {
            "name": "Live Oak County"
        },
        {
            "name": "Llano County"
        },
        {
            "name": "Loving County"
        },
        {
            "name": "Lubbock County"
        },
        {
            "name": "Lynn County"
        },
        {
            "name": "McCulloch County"
        },
        {
            "name": "McLennan County"
        },
        {
            "name": "McMullen County"
        },
        {
            "name": "Marion County"
        },
        {
            "name": "Martin County"
        },
        {
            "name": "Mason County"
        },
        {
            "name": "Matagorda County"
        },
        {
            "name": "Maverick County"
        },
        {
            "name": "Medina County"
        },
        {
            "name": "Menard County"
        },
        {
            "name": "Midland County"
        },
        {
            "name": "Milam County"
        },
        {
            "name": "Mills County"
        },
        {
            "name": "Mitchell County"
        },
        {
            "name": "Montague County"
        },
        {
            "name": "Moore County"
        },
        {
            "name": "Morris County"
        },
        {
            "name": "Motley County"
        },
        {
            "name": "Nacogdoches County"
        },
        {
            "name": "Navarro County"
        },
        {
            "name": "Newton County"
        },
        {
            "name": "Nolan County"
        },
        {
            "name": "Nueces County"
        },
        {
            "name": "Ochiltree County"
        },
        {
            "name": "Oldham County"
        },
        {
            "name": "Palo Pinto County"
        },
        {
            "name": "Panola County"
        },
        {
            "name": "Parker County"
        },
        {
            "name": "Parmer County"
        },
        {
            "name": "Pecos County"
        },
        {
            "name": "Polk County"
        },
        {
            "name": "Potter County"
        },
        {
            "name": "Presidio County"
        },
        {
            "name": "Rains County"
        },
        {
            "name": "Randall County"
        },
        {
            "name": "Reagan County"
        },
        {
            "name": "Real County"
        },
        {
            "name": "Red River County"
        },
        {
            "name": "Reeves County"
        },
        {
            "name": "Refugio County"
        },
        {
            "name": "Roberts County"
        },
        {
            "name": "Robertson County"
        },
        {
            "name": "Rockwall County"
        },
        {
            "name": "Runnels County"
        },
        {
            "name": "Rusk County"
        },
        {
            "name": "Sabine County"
        },
        {
            "name": "San Augustine County"
        },
        {
            "name": "San Jacinto County"
        },
        {
            "name": "San Patricio County"
        },
        {
            "name": "San Saba County"
        },
        {
            "name": "Schleicher County"
        },
        {
            "name": "Scurry County"
        },
        {
            "name": "Shackelford County"
        },
        {
            "name": "Shelby County"
        },
        {
            "name": "Sherman County"
        },
        {
            "name": "Smith County"
        },
        {
            "name": "Somervell County"
        },
        {
            "name": "Starr County"
        },
        {
            "name": "Stephens County"
        },
        {
            "name": "Sterling County"
        },
        {
            "name": "Stonewall County"
        },
        {
            "name": "Sutton County"
        },
        {
            "name": "Swisher County"
        },
        {
            "name": "Tarrant County"
        },
        {
            "name": "Taylor County"
        },
        {
            "name": "Terrell County"
        },
        {
            "name": "Terry County"
        },
        {
            "name": "Throckmorton County"
        },
        {
            "name": "Titus County"
        },
        {
            "name": "Tom Green County"
        },
        {
            "name": "Travis County"
        },
        {
            "name": "Tyler County"
        },
        {
            "name": "Upshur County"
        },
        {
            "name": "Upton County"
        },
        {
            "name": "Uvalde County"
        },
        {
            "name": "Val Verde County"
        },
        {
            "name": "Van Zandt County"
        },
        {
            "name": "Victoria County"
        },
        {
            "name": "Walker County"
        },
        {
            "name": "Waller County"
        },
        {
            "name": "Ward County"
        },
        {
            "name": "Webb County"
        },
        {
            "name": "Wharton County"
        },
        {
            "name": "Wheeler County"
        },
        {
            "name": "Wichita County"
        },
        {
            "name": "Wilbarger County"
        },
        {
            "name": "Willacy County"
        },
        {
            "name": "Williamson County"
        },
        {
            "name": "Wilson County"
        },
        {
            "name": "Winkler County"
        },
        {
            "name": "Wise County"
        },
        {
            "name": "Wood County"
        },
        {
            "name": "Yoakum County"
        },
        {
            "name": "Young County"
        },
        {
            "name": "Zapata County"
        },
        {
            "name": "Zavala County"
        },
        {
            "name": "Adams County"
        },
        {
            "name": "Asotin County"
        },
        {
            "name": "Benton County"
        },
        {
            "name": "Chelan County"
        },
        {
            "name": "Clallam County"
        },
        {
            "name": "Clark County"
        },
        {
            "name": "Cowlitz County"
        },
        {
            "name": "Douglas County"
        },
        {
            "name": "Ferry County"
        },
        {
            "name": "Garfield County"
        },
        {
            "name": "Grant County"
        },
        {
            "name": "Grays Harbor County"
        },
        {
            "name": "Island County"
        },
        {
            "name": "Kitsap County"
        },
        {
            "name": "Kittitas County"
        },
        {
            "name": "Klickitat County"
        },
        {
            "name": "Lincoln County"
        },
        {
            "name": "Okanogan County"
        },
        {
            "name": "Pacific County"
        },
        {
            "name": "Pend Oreille County"
        },
        {
            "name": "Pierce County"
        },
        {
            "name": "San Juan County"
        },
        {
            "name": "Skagit County"
        },
        {
            "name": "Skamania County"
        },
        {
            "name": "Snohomish County"
        },
        {
            "name": "Spokane County"
        },
        {
            "name": "Stevens County"
        },
        {
            "name": "Thurston County"
        },
        {
            "name": "Wahkiakum County"
        },
        {
            "name": "Walla Walla County"
        },
        {
            "name": "Whatcom County"
        },
        {
            "name": "Whitman County"
        },
        {
            "name": "Yakima County"
        }
    ];
    var counties2 = [{"name": "Alameda County"}, {"name": "Alpine County"}, {"name": "Amador County"}];
    var temps = [];

    function MovieSearchController(MovieService, $routeParams, $location, $http) {
        var vm = this;
        vm.searchMovieByTitle = searchMovieByTitle;
        vm.title = $routeParams.title;

        function init() {
            findWeather();

            if (vm.title) {
                $location.url('/search/' + vm.title);
                searchMovieByTitle(vm.title);
            }
        }

        init();


        function searchMovieByTitle(title) {
            MovieService
                .searchMovieByTitle(title)
                .success(function (result) {
                    vm.movies = result.Search;
                    console.log("here");
                    console.log(vm.movies);
                })
        }

        function findWeather() {
            for (var c in counties) {
                var url = "http://api.openweathermap.org/data/2.5/weather?q=" + counties[c].name + "&APPID=e822da6865bf3f112c7ac5ade4f3a684";
                // var cName = counties[c].name;
                // console.log(cName);
                var count = 'test1';
                var countmy = 1;
                $http.get(url)
                    .success(function (res) {
                        // console.log(res);
                        // console.log(count++);
                        console.log(count + " " +  res.wind.speed );
                        countmy++;
                        if (count == 'test1') {
                            count = 'test2';
                        } else if (count == 'test2') {
                            count = 'test1';
                        }


                        temps.push(res.main.temp);
                    })
                    .error(function () {

                    });



                // console.log(curCity);
                // console.log(curCity);
            }
            // console.log(temps);
            // console.log("count");
            // for (var t in temps) {
            //
            // }
        }

        // function findWeatherController() {
        //     MovieService
        //         .findWeather();
        // }
        // function findWeather() {
        //     for (var c in cities) {
        //         var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cities[c].cityName + "&APPID=e822da6865bf3f112c7ac5ade4f3a684";
        //         var curCity = $http.get(url);
        //         // console.log(curCity);
        //     }
        // }
    }

})();
// http://localhost:63342/wang-yudong-webdev/assignment/public/experiment/movie/index.html#/search