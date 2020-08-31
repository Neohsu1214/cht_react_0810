FROM adoptopenjdk/openjdk11:latest
EXPOSE 8080
ARG JAR_FILE=build/libs/Backend1_gradle-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Xmx2048m","-Xms2048m","-Dspring.profiles.active=h2","-jar","/app.jar"]