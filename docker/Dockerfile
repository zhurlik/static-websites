FROM ubuntu/apache2

# Via these variables you can specify domains for both types: mobile and desktop
ENV MOBILE_SITE=m.test.com
ENV DESKTOP_SITE=test.com

COPY config/apache2/apache2.conf /etc/apache2/apache2.conf
COPY config/apache2/mobile-site.conf /etc/apache2/sites-enabled/mobile-site.conf
COPY config/apache2/desktop-site.conf /etc/apache2/sites-enabled/desktop-site.conf

RUN a2enmod rewrite