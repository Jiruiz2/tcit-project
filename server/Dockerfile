FROM ruby:2.3.0

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN mkdir /tcit_server

WORKDIR /tcit_server

COPY Gemfile /tcit_server/Gemfile

COPY Gemfile.lock /tcit_server/Gemfile.lock

RUN bundle install

CMD ["rails", "server"]