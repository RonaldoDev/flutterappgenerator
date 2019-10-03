FROM ubuntu:18.04

RUN apt update \
 && apt install -y \
    curl \
    gnupg \
    gcc \
    g++ \
    make \
    wget \
    zip \
    unzip \
    git \
    apt-transport-https \
    ca-certificates \
    lib32stdc++6 openjdk-8-jdk build-essential libglu1-mesa libstdc++6 \
 && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
 && apt install -y nodejs \
 && rm -rf /var/lib/apt/lists/*

# Install the Android SDK Dependency.
ENV ANDROID_SDK_URL="https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip"
ENV ANDROID_HOME="/opt/android_sdk"
RUN mkdir -p "${ANDROID_HOME}"
RUN mkdir -p ~/.android
# Silence warning.
RUN touch ~/.android/repositories.cfg
ENV ANDROID_SDK_ARCHIVE="${ANDROID_HOME}/archive"
RUN wget --progress=dot:giga "${ANDROID_SDK_URL}" -O "${ANDROID_SDK_ARCHIVE}"
RUN unzip -q -d "${ANDROID_HOME}" "${ANDROID_SDK_ARCHIVE}"
# Suppressing output of sdkmanager to keep log size down
# (it prints install progress WAY too often).
RUN yes "y" | "${ANDROID_HOME}/tools/bin/sdkmanager" "tools" > /dev/null
RUN yes "y" | "${ANDROID_HOME}/tools/bin/sdkmanager" "build-tools;28.0.3" > /dev/null
RUN yes "y" | "${ANDROID_HOME}/tools/bin/sdkmanager" "platforms;android-28" > /dev/null
RUN yes "y" | "${ANDROID_HOME}/tools/bin/sdkmanager" "platform-tools" > /dev/null
RUN yes "y" | "${ANDROID_HOME}/tools/bin/sdkmanager" "extras;android;m2repository" > /dev/null
RUN yes "y" | "${ANDROID_HOME}/tools/bin/sdkmanager" "extras;google;m2repository" > /dev/null
RUN yes "y" | "${ANDROID_HOME}/tools/bin/sdkmanager" "patcher;v4" > /dev/null
RUN rm "${ANDROID_SDK_ARCHIVE}"
ENV PATH="${ANDROID_HOME}/tools:${PATH}"
ENV PATH="${ANDROID_HOME}/tools/bin:${PATH}"
# Silence warnings when accepting android licenses.
RUN mkdir -p ~/.android
RUN touch ~/.android/repositories.cfg

# Install Flutter SDK
WORKDIR /opt/flutter
ENV FLUTTER_FILE_NAME="flutter_linux_v1.9.1+hotfix.2-stable.tar.xz"
ENV FLUTTER_SDK_URL="https://storage.googleapis.com/flutter_infra/releases/stable/linux/${FLUTTER_FILE_NAME}"
RUN wget --progress=dot:giga "${FLUTTER_SDK_URL}"
RUN tar xf "${FLUTTER_FILE_NAME}" --strip 1
RUN rm "${FLUTTER_FILE_NAME}"
ENV PATH="/opt/flutter/bin:${PATH}"

# Dart SDK
ENV PATH="/opt/flutter/bin/cache/dart-sdk/bin:${PATH}"

RUN mkdir -p /srv/app/flutter_template
WORKDIR /srv/app/flutter_template

RUN flutter create hello_world
WORKDIR /srv/app/flutter_template/hello_world
RUN flutter build apk --release

RUN mkdir -p /srv/app/server
COPY . /srv/app/server
WORKDIR /srv/app/server

RUN npm install



CMD ["npm", "run", "dev"]