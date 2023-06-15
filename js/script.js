let burger = document.getElementById("burger");
let nav = document.getElementById("nav");
let navOpened = false;
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let theme = document.getElementById("theme");
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
let modalShown = false;

var typed = new Typed('#profile1', {
    strings: ['Web Developer', 'Programmer', 'Coder'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

var typed = new Typed('#profile2', {
    strings: ['Web Developer', 'Programmer', 'Coder'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

const changeToLight = () => {
    // document.getElementsByTagName("body").item(0).style.backgroundColor = "#fcf2e8"
    document.getElementsByTagName("body").item(0).style.backgroundColor = "#fefae0"
    document.querySelector(".header").style.backgroundColor = "#fff"
    document.querySelector(".logo").style.color = "#0081ff"
    document.querySelector(".logo span").style.color = "#333"
    document.querySelector(".navbar").style.backgroundColor = "#fff"
    document.querySelectorAll(".navbar ul li a").forEach(element => {
        element.style.color = "#333"
        element.addEventListener("mouseover", () => {
            element.style.color = "#0081ff"
        })
        element.addEventListener("mouseout", () => {
            element.style.color = "#333"
        })
    });
    document.querySelectorAll(".navbar ul li a").forEach(element => {
        element.classList.add("lightTheme");
    });
    document.querySelectorAll(".line").forEach(element => {
        element.style.backgroundColor = "#333"
    });
    document.querySelector(".identity").style.color = "#333"
    document.querySelector(".txt1").style.color = "#0088ff"
    document.querySelector(".txt2 h1").style.color = "#0a6ed0"
    document.querySelector(".txt3 span").style.color = "#0a6ed0"
    document.querySelector(".txt3 .typed-cursor").style.color = "#0a6ed0"
    document.querySelectorAll(".btn").forEach(element => {
        element.style.borderColor = "#006cad";
        element.style.backgroundColor = "#36baf5";
        element.style.color = "#222";
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "transparent"
            element.style.color = "#0079ff"
        })
        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = "#36baf5"
            element.style.color = "#222"
        })
    });
    document.querySelectorAll(".aboutMe").forEach(element => {
        element.style.color = "#333"
    });
    document.querySelector(".details").style.color = "#333"
    document.querySelector(".details h1 span").style.color = "#0a6ed0"
    document.querySelector(".details h1 .typed-cursor").style.color = "#0a6ed0"
    document.querySelectorAll(".box p span").forEach(element => {
        element.style.color = "#0a6ed0"
    });
    document.querySelectorAll(".card").forEach(element => {
        element.style.backgroundColor = "#36baf5"
        element.style.borderColor = "#006cad"
        element.style.color = "#222"
    });
    document.querySelector(".myProjects").style.color = "#333"
    document.querySelectorAll(".projectCard").forEach(element => {
        element.style.borderColor = "#006cad"
        element.style.backgroundColor = "#36baf5"
        element.style.color = "#222"
    })
    document.querySelector(".contactMe").style.color = "#333"
    document.querySelector(".contact-content").style.color = "#333"
    document.querySelectorAll(".right form input").forEach(element => {
        element.style.borderColor = "#111"
        element.style.color = "#111"
    });
    document.querySelector(".right form textarea").style.color = "#111"
    document.querySelector(".right form textarea").style.borderColor = "#111"
    var styleElement = document.createElement("style")
    styleElement.innerHTML = `
    ::placeholder {
      color: #000;
      opacity: 0.8;
    }
    :-ms-input-placeholder {
      color: #000;
    }
    ::-ms-input-placeholder {
      color: #000;
    }
    ::-webkit-scrollbar-track {
        background: #007bff;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #2f2f2f;
    }
  `;
    document.head.appendChild(styleElement);
    document.getElementById("submit").style.backgroundColor = "#36baf5"
    document.getElementById("submit").style.color = "#222"
    document.getElementById("submit").style.borderColor = "#006cad"
    document.getElementById("submit").addEventListener("mouseover", () => {
        document.getElementById("submit").style.backgroundColor = "transparent"
        document.getElementById("submit").style.color = "#0079ff"
    })
    document.getElementById("submit").addEventListener("mouseout", () => {
        document.getElementById("submit").style.backgroundColor = "#36baf5"
        document.getElementById("submit").style.color = "#222"
    })
    document.querySelector(".footer").style.backgroundColor = "#fff"
    document.querySelector(".footer").style.color = "#333"
    document.querySelector(".creator h3 span").style.color = "#0081ff";
    document.querySelector(".creator1 h3 span").style.color = "#0081ff";
    document.querySelector(".modal").style.backgroundColor = "#2b2a2a";
    document.querySelector(".modal").style.color = "#fcf2e8"
    document.querySelector(".top").style.backgroundColor = "#1e1e1e";
    document.querySelectorAll(".modalLine").forEach(element => {
        element.style.backgroundColor = "#fff";
    });
}

const changeToDark = () => {
    document.getElementsByTagName("body").item(0).style.backgroundColor = "#2b2a2a"
    document.querySelector(".header").style.backgroundColor = "#1e1e1e"
    document.querySelector(".logo").style.color = "#ff9d3c"
    document.querySelector(".logo span").style.color = "#ebe2e2"
    document.querySelector(".navbar").style.backgroundColor = "#1e1e1e"
    document.querySelectorAll(".navbar ul li a").forEach(element => {
        element.style.color = "#ebe2e2"
        element.addEventListener("mouseover", () => {
            element.style.color = "#ff9d3c"
        })
        element.addEventListener("mouseout", () => {
            element.style.color = "#ebe2e2"
        })
    });
    document.querySelectorAll(".navbar ul li a").forEach(element => {
        element.classList.remove("lightTheme");
    });
    document.querySelectorAll(".line").forEach(element => {
        element.style.backgroundColor = "#ebe2e2"
    });
    document.querySelector(".identity").style.color = "#fcf2e8"
    document.querySelector(".txt1").style.color = "#ff7500"
    document.querySelector(".txt2 h1").style.color = "#ff6800"
    document.querySelector(".txt3 span").style.color = "#ff8000"
    document.querySelector(".txt3 .typed-cursor").style.color = "#ff8000"
    document.querySelectorAll(".btn").forEach(element => {
        element.style.borderColor = "#ff6800";
        element.style.backgroundColor = "#ff9a34e6";
        element.style.color = "#fcf2e8";
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "transparent"
            element.style.color = "#ff6800"
        })
        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = "#ff9a34e6"
            element.style.color = "#fcf2e8"
        })
    });
    document.querySelectorAll(".aboutMe").forEach(element => {
        element.style.color = "#fcf2e8"
    });
    document.querySelector(".details").style.color = "#fcf2e8"
    document.querySelector(".details h1 span").style.color = "#ff6800"
    document.querySelector(".details h1 .typed-cursor").style.color = "#ff8000"
    document.querySelectorAll(".box p span").forEach(element => {
        element.style.color = "#ff6800"
    });
    document.querySelectorAll(".card").forEach(element => {
        element.style.backgroundColor = "#ff9a34e6"
        element.style.borderColor = "#ff6800"
        element.style.color = "#fcf2e8"
    });
    document.querySelector(".myProjects").style.color = "#fcf2e8"
    document.querySelectorAll(".projectCard").forEach(element => {
        element.style.borderColor = "#ff6800"
        element.style.backgroundColor = "#ff9a34e6"
        element.style.color = "#fcf2e8"
    });
    document.querySelector(".contactMe").style.color = "#fcf2e8"
    document.querySelector(".contact-content").style.color = "#fcf2e8"
    document.querySelectorAll(".right form input").forEach(element => {
        element.style.borderColor = "#fcf2e8"
        element.style.color = "#fcf2e8"
    });
    document.querySelector(".right form textarea").style.color = "#fcf2e8"
    document.querySelector(".right form textarea").style.borderColor = "#fcf2e8"
    var styleElement = document.createElement("style");
    styleElement.innerHTML = `
    ::placeholder {
      color: #fcf2e8;
      opacity: 0.8;
    }
    :-ms-input-placeholder {
      color: #fcf2e8;
    }
    ::-ms-input-placeholder {
      color: #fcf2e8;
    }
    ::-webkit-scrollbar-track {
        background: #ff7500;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #fcf2e8;
    }
  `;
    document.head.appendChild(styleElement);
    document.getElementById("submit").style.backgroundColor = "#ff9a34e6"
    document.getElementById("submit").style.color = "#fcf2e8"
    document.getElementById("submit").style.borderColor = "#ff6800"
    document.getElementById("submit").addEventListener("mouseover", () => {
        document.getElementById("submit").style.backgroundColor = "transparent"
        document.getElementById("submit").style.color = "#ff6800"
    })
    document.getElementById("submit").addEventListener("mouseout", () => {
        document.getElementById("submit").style.backgroundColor = "#ff9a34e6"
        document.getElementById("submit").style.color = "#fcf2e8"
    })
    document.querySelector(".footer").style.backgroundColor = "#1e1e1e"
    document.querySelector(".footer").style.color = "#fcf2e8"
    document.querySelector(".creator h3 span").style.color = "#ff6800";
    document.querySelector(".creator1 h3 span").style.color = "#ff6800";
    document.querySelector(".modal").style.backgroundColor = "#fefae0";
    document.querySelector(".modal").style.color = "#222"
    document.querySelector(".top").style.backgroundColor = "#fff";
    document.querySelectorAll(".modalLine").forEach(element => {
        element.style.backgroundColor = "#1e1e1e";
    });
}

let projects = [
    {
        image: "../images/GuessTheNumber.png",
        title: "Guess The Number Game",
        languages: ["HTML", "CSS", "JavaScript"],
        viewLink: "https://sajal-khawas8.github.io/GuessTheNumber/",
        sourceCodeLink: "https://github.com/Sajal-Khawas8/GuessTheNumber",
        downloadLink: "https://github.com/sajal-khawas8/GuessTheNumber/archive/main.zip"
    },
    {
        image: "../images/WeatherApp.png",
        title: "Weather App",
        languages: ["HTML", "Bootstrap", "JavaScript"],
        viewLink: "https://sajal-khawas8.github.io/MyCityWeather/",
        sourceCodeLink: "https://github.com/Sajal-Khawas8/MyCityWeather",
        downloadLink: "https://github.com/sajal-khawas8/MyCityWeather/archive/main.zip"
    },
    {
        image: "../images/MusicPlayer.png",
        title: "Music Player",
        languages: ["HTML", "CSS", "JavaScript"],
        viewLink: "https://sajal-khawas8.github.io/MyTunes/",
        sourceCodeLink: "https://github.com/Sajal-Khawas8/MyTunes",
        downloadLink: "https://github.com/sajal-khawas8/MyTunes/archive/main.zip"
    },
    {
        image: "../images/TicketBooking.png",
        title: "Ticket Booking App",
        languages: ["React", "CSS", "NodeJS", "RazorPay"],
        viewLink: "",
        sourceCodeLink: "https://github.com/Sajal-Khawas8/OmniPass-AllInOneTicketBooking",
        downloadLink: "https://github.com/sajal-khawas8/OmniPass-AllInOneTicketBooking/archive/main.zip"
    },
    {
        image: "../images/Portfolio.png",
        title: "Personal Portfolio Website",
        languages: ["HTML", "CSS", "JavaScript"],
        viewLink: "https://sajal-khawas8.github.io/Portfolio-SajalKhawas/",
        sourceCodeLink: "https://github.com/Sajal-Khawas8/Portfolio-SajalKhawas",
        downloadLink: "https://github.com/sajal-khawas8/Portfolio-SajalKhawas/archive/main.zip"
    },
    {
        image: "../images/SRMS.png",
        title: "Student Result Management System",
        languages: ["Java", "JDBC", "MySQL"],
        viewLink: "https://github.com/Sajal-Khawas8/StudentResultManagementSystem/tree/main/Output%20SS",
        sourceCodeLink: "https://github.com/Sajal-Khawas8/StudentResultManagementSystem",
        downloadLink: "https://github.com/sajal-khawas8/StudentResultManagementSystem/archive/main.zip"
    },
]

const generateProjectCards = () => {
    let htmlString = "";
    projects.forEach((project) => {
        let projectHtml = `<div class="projectCard">
        <div class="project">
            <img src="${project.image}" alt="${project.title}" srcset="">
            <div class="projectBtns">
                <a href="${project.viewLink}" target="_blank">
                    <img src="./images/viewLiveButton.png" alt="" srcset="" title="View Live">
                </a>
                <a href="${project.sourceCodeLink}" target="_blank">
                    <img src="./images/viewCodeButton.png" alt="" srcset="" title="View Source Code">
                </a>
                <a href="${project.downloadLink}">
                    <img src="./images/downloadCodeButton.png" alt="" srcset="" title="Download Source Code">
                </a>
            </div>
        </div>
        <h3 class="title">${project.title}</h3>
        <p>${project.languages.join(" | ")}</p>
    </div>`
        htmlString += projectHtml;
    })
    document.querySelector(".container2").innerHTML = htmlString;
};

let skills = ["C/C++", "Core Java", "Python", "HTML", "CSS", "Bootstrap", "JavaScript", "React", "PHP", "MySQL"]

const generateSkillCards = () => {
    let htmlString = "";
    skills.forEach((skill) => {
        let skillHtml = `<div class="card">${skill}</div>`
        htmlString += skillHtml;
    })
    document.querySelector(".container-2").innerHTML = htmlString;
};

burger.addEventListener("click", () => {
    // profilePic.classList.toggle("hide");
    navOpened = !navOpened;
    nav.classList.toggle("display-nav");
    line1.classList.toggle("line1");
    line2.classList.toggle("line2");
    line3.classList.toggle("line3");
    setTimeout(() => {
        document.querySelectorAll(".right form input").forEach(element => {
            element.classList.toggle("z-effect");
        });
        document.querySelector(".right form textarea").classList.toggle("z-effect");
    }, 50);
})

document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target) && navOpened) {
        navOpened = !navOpened;
        nav.classList.toggle("display-nav");
        line1.classList.toggle("line1");
        line2.classList.toggle("line2");
        line3.classList.toggle("line3");
        setTimeout(() => {
            document.querySelectorAll(".right form input").forEach(element => {
                element.classList.toggle("z-effect");
            });
            document.querySelector(".right form textarea").classList.toggle("z-effect");
        }, 50);
    }
})

theme.addEventListener("click", () => {
    light.classList.toggle("hide");
    dark.classList.toggle("hide");
})

light.addEventListener("click", () => {
    theme.classList.toggle("rotate");//Add the class rotate
    setTimeout(() => {
        theme.classList.toggle("rotate");//Remove the class rotate after 500ms (after the transition takes place)
    }, 500);
    changeToLight();
})

dark.addEventListener("click", () => {
    theme.classList.toggle("rotate");//Add the class rotate
    setTimeout(() => {
        theme.classList.toggle("rotate");//Remove the class rotate after 500ms (after the transition takes place)
    }, 500);
    changeToDark();
})

const handleForm = () => {
    emailjs.init("AMq04XVXcpulsHfkX");
}

document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("submit").value = "Sending...";
    document.getElementById("submit").setAttribute("disabled", true);
    const serviceID = "service_2dxaf1l";
    const templateID = "template_maryaeg";

    // send the email here
    emailjs.sendForm(serviceID, templateID, "#contactForm").then(
        (response) => {
            var btnColor = document.getElementById("submit").style.backgroundColor;
            document.getElementById("submit").style.backgroundColor = "#00aa00";
            document.getElementById("submit").value = "Message Sent";
            setTimeout(() => {
                // document.querySelectorAll(".right form input").forEach(element => {
                //     element.value = "";
                // });
                // document.querySelector("right form textarea").value = "";
                document.getElementById("contactForm").reset();
                document.getElementById("submit").style.backgroundColor = btnColor
                document.getElementById("submit").value = "Send Message";
                document.getElementById("submit").removeAttribute("disabled");
            }, 2000);
        },
        (error) => {
            var btnColor = document.getElementById("submit").style.backgroundColor;
            document.getElementById("submit").style.backgroundColor = "#fc0000";
            document.getElementById("submit").value = "Failed";
            setTimeout(() => {
                document.getElementById("submit").style.backgroundColor = btnColor
                document.getElementById("submit").value = "Send Message";
                document.getElementById("submit").removeAttribute("disabled");
            }, 2000);
        }
    );
});

const changeThemeBasedOnTime = () => {
    if (new Date().getHours() >= 6 && new Date().getHours() < 18) {
        changeToLight();
    } else {
        changeToDark();
    }
}

const scrollProjectCards = () => {
    const container = document.querySelector(".container2");
    let scrollInterval;
    let isScrolling = false;

    const startScroll = () => {
        if (!isScrolling) {
            scrollInterval = setInterval(() => {
                container.scrollLeft++;
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    container.scrollLeft = 0;
                }
            }, 6);
            isScrolling = true;
        }
    };

    const stopScroll = () => {
        clearInterval(scrollInterval);
        isScrolling = false;
    };

    document.querySelectorAll("a").forEach(element => {
        element.addEventListener("click", () => {
            stopScroll();
            let scrollTimeout;
            document.addEventListener("scroll", () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    startScroll();
                }, 200);
            });
        });
    });

    document.querySelectorAll(".projectCard").forEach(element => {
        element.addEventListener("mouseenter", stopScroll);
        element.addEventListener("mouseleave", startScroll);
    });

    startScroll();
};

document.addEventListener("mouseout", (e) => {
    if (!e.toElement && !e.relatedTarget && !modalShown) {
        document.querySelector(".modal").style.display = "block";
        modalShown = true;
    }
})

//If resume downloaded by clicking on button of about section, then don't show the modal box
document.querySelector(".resumeBtn").addEventListener("click", () => {
    modalShown = true;
})

document.querySelector(".closeModal").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
})

document.querySelector(".no").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
})

document.querySelector(".yes").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
})

const run = () => {
    changeThemeBasedOnTime();
    generateProjectCards();
    scrollProjectCards();
    generateSkillCards();
    setTimeout(() => {
        if (!modalShown) {
            document.querySelector(".modal").style.display = "block";
            modalShown = true;
        }
    }, 30 * 1000);
}

run();