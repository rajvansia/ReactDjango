# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('band', '0003_delete_userprofile'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('username', models.CharField(max_length=254, unique=True, null=True)),
                ('first_name', models.CharField(max_length=30, null=True, blank=True)),
                ('last_name', models.CharField(max_length=30, null=True, blank=True)),
                ('email', models.EmailField(max_length=75, null=True, blank=True)),
                ('birthday', models.DateField(default=datetime.datetime.now)),
                ('is_parent', models.BooleanField(default=False)),
                ('gender', models.CharField(max_length=30, null=True, blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
