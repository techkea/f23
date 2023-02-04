<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script>

## Eksekver din jar fil 
Du kan eksekvere en JAR-fil i detached mode i terminalen, fx en Spring Boot-applikation. Du kan gøre dette ved at bruge følgende kommando:

````
	nohup java -jar <jar filnavn> &
````

Med dette vil JAR-filen blive eksekveret i baggrunden, selv efter at du har lukket terminalen. "nohup" forhindrer, at procesen bliver annulleret, når terminalen lukkes, og "&" begynder at køre procesen i baggrunden.

Husk, at du muligvis skal angive fuld sti til JAR-filen, hvis den ikke befinder sig i det aktuelle arbejdsmappe.
