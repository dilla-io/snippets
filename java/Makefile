build:
	@ docker build -t dilla-java-extism .

clean:
	@ docker rmi dilla-java-extism

java-install:
	mvn dependency:copy-dependencies -DoutputDirectory=./
	find ./ -name "*.jar" -exec jar -xf {} \;
	rm *.jar

render:
	@ docker run -it --rm dilla-java-extism java io.dilla.Render

describe:
	@ docker run -it --rm dilla-java-extism java io.dilla.Describe

# local_install: local_install_java local_install_extism

# local_install_java:
# 	sudo dnf install java-17-openjdk.x86_64
# 	sudo dnf install maven

# local_install_extism:
# 	wget https://github.com/extism/extism/releases/download/v1.0.3/libextism-x86_64-unknown-linux-gnu-v1.0.3.tar.gz
# 	sudo tar -xf libextism-x86_64-unknown-linux-gnu-v1.0.3.tar.gz -C /usr/local/lib64/
