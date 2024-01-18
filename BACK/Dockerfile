FROM php:8.2-cli

# Set the working directory to /app
WORKDIR /var/www/html

# Install dependencies
RUN apt-get update && apt-get install -y \
    libicu-dev \
    && docker-php-ext-install -j$(nproc) intl pdo_mysql

RUN apt-get install -y git unzip zip

RUN apt-get update && \
    apt-get install -y libzip-dev && \
    docker-php-ext-install pdo_mysql zip

# Copy the current directory contents into the container at /app
COPY . /var/www/html/

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Symfony binary
RUN curl -sS https://get.symfony.com/cli/installer | bash

RUN mv /root/.symfony5/bin/symfony /usr/local/bin/symfony

#RUN stat /var/www/html/public/index.php

#RUN composer require symfony/maker-bundle --dev

#RUN composer require orm

EXPOSE 8000

CMD ["symfony", "server:start", "--no-tls"]