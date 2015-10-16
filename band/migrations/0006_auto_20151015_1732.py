# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('band', '0005_auto_20151014_2006'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='band',
            options={'ordering': ('name',)},
        ),
        migrations.AddField(
            model_name='band',
            name='owner',
            field=models.ForeignKey(related_name='band', to=settings.AUTH_USER_MODEL, null=True),
            preserve_default=True,
        ),
    ]
