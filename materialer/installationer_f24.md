<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script> 

# Installationer
Herunder finder du en beskrivelse af hvad og hvordan du skal installere det software vi skal arbejde med i dag og resten af dette semester.


## 1. Docker Desktop
Det første du skal installere er programmet Docker Desktop. I første om gang kan du bare se dette program som en beholder som du så efterfølgende kan installere linux og andre programmer i. 

### Download og installer Docker Desktop
Naviger til **[Dockers website](https://www.docker.com/)** og download og installer Docker Desktop.

#### Windows tutorials
På Windows kan der i nogle tilfælde være lidt udfordringer med at installere Docker desktop.
Så det kan være en god ide at følge disse to tutorials:

<iframe width="560" height="315" src="https://www.youtube.com/embed/eId6K8d0v6o?si=3iVA1XTlNrjmBn9K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

![](img/wsl2-enabled.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/fnjs4W91Olc?si=DYw1qXDC060GW8T-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

##### Windows Home 10
Hvis du skulle have Windows 10 Home på din computer skal du følge denne fremgangsmåde som er beskrevet her:
**[Install Docker Desktop on Windows Home](https://docs.docker.com/docker-for-windows/install-windows-home/)**

#### Check om alt er installeret korrekt
I din terminal, gitbash eller powershell skal du skrive ``` docker --version ```, hvilket skulle give dig følgende resultat:  

````
	$ docker --version
	Docker version 20.10.20, build 9fdeb9c
````
Versionsnummeret kan variere, men hvis du ikke kan se dette eller ser en fejl, har du ikke fået installeret Docker Desktop korrekt, og skal derfor gentage processen.


### Download og Kør dit linux OS

<iframe></iframe>


```
    mkdir ~/webtop
```

```
  docker run -d \
  --name=webtop-ubuntu-mate \
  --security-opt seccomp=unconfined `#optional` \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Etc/UTC \
  -e SUBFOLDER=/ `#optional` \
  -e TITLE=Teknologi `#optional` \
  -p 3000:3000 \
  -p 3001:3001 \
  -v ~/webtop:/config \
  -v /var/run/docker.sock:/var/run/docker.sock `#optional` \
  --shm-size="1gb" `#optional` \
  --restart unless-stopped \
  lscr.io/linuxserver/webtop:ubuntu-mate
```



