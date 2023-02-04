<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script>

# Azure CheatSheet
Det følgende er de kommandoer vi har brugt for at arbejde med jeres Linux maskine på Azure.

Feks. hvordan i installere Docker på maskinen og hvordan i installere Mysql som et docker image og bruger denne dabase. Og hvordan i eksekverer en jar file (web app) på maskinen.


## Eksekver din jar fil 
Du kan eksekvere en JAR-fil i detached mode i terminalen, fx en Spring Boot-applikation. Du kan gøre dette ved at bruge følgende kommando:

````
	nohup java -jar <jar filnavn> &
````

Med dette vil JAR-filen blive eksekveret i baggrunden, selv efter at du har lukket terminalen. "nohup" forhindrer, at procesen bliver annulleret, når terminalen lukkes, og "&" begynder at køre procesen i baggrunden.

Husk, at du muligvis skal angive den fuld sti til JAR-filen, hvis den ikke befinder sig i den aktuelle arbejdsmappe.
