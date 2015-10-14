# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Band',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=128)),
                ('date_added', models.DateField(default=datetime.datetime.now)),
                ('image', models.CharField(unique=True, max_length=255, blank=True)),
                ('bio', models.TextField(unique=True, max_length=255, blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('username', models.CharField(unique=True, max_length=254)),
                ('first_name', models.CharField(max_length=30, blank=True)),
                ('last_name', models.CharField(max_length=30, blank=True)),
                ('email', models.EmailField(max_length=75, blank=True)),
                ('birthday', models.DateField(default=datetime.datetime.now)),
                ('is_parent', models.BooleanField(default=False)),
                ('gender', models.CharField(max_length=30, blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
