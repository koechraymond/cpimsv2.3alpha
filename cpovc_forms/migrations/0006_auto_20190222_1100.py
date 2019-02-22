# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cpovc_forms', '0005_auto_20190222_1056'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='ovcreferrals',
            table='ovc_cp_referrals',
        ),
    ]
