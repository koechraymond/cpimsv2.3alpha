# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cpovc_forms', '0006_auto_20190222_1100'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ovccarebenchmarkscore',
            name='care_giver_id',
        ),
        migrations.RemoveField(
            model_name='ovccarebenchmarkscore',
            name='event_id',
        ),
        migrations.RemoveField(
            model_name='ovccarebenchmarkscore',
            name='household_id',
        ),
        migrations.RemoveField(
            model_name='ovccarecaseplan',
            name='cp_service_id',
        ),
        migrations.RemoveField(
            model_name='ovccarecaseplan',
            name='event_id',
        ),
        migrations.RemoveField(
            model_name='ovccarecaseplan',
            name='form_id',
        ),
        migrations.RemoveField(
            model_name='ovccarecaseplan',
            name='person_id',
        ),
        migrations.RemoveField(
            model_name='ovccarecpara',
            name='event_id',
        ),
        migrations.RemoveField(
            model_name='ovccarecpara',
            name='household_id',
        ),
        migrations.RemoveField(
            model_name='ovccarecpara',
            name='person_id',
        ),
        migrations.RemoveField(
            model_name='ovccarewellbeing',
            name='event_id',
        ),
        migrations.RemoveField(
            model_name='ovccarewellbeing',
            name='household_id',
        ),
        migrations.RemoveField(
            model_name='ovccarewellbeing',
            name='person_id',
        ),
        migrations.RemoveField(
            model_name='ovcexplanations',
            name='event_id',
        ),
        migrations.RemoveField(
            model_name='ovcexplanations',
            name='form_id',
        ),
        migrations.RemoveField(
            model_name='ovcgoals',
            name='event_id',
        ),
        migrations.RemoveField(
            model_name='ovcgoals',
            name='person_id',
        ),
        migrations.RemoveField(
            model_name='ovchouseholddemographics',
            name='event_id',
        ),
        migrations.RemoveField(
            model_name='ovchouseholddemographics',
            name='household_id',
        ),
        migrations.RemoveField(
            model_name='ovcreferrals',
            name='event_id',
        ),
        migrations.RemoveField(
            model_name='ovcreferrals',
            name='person_id',
        ),
        migrations.DeleteModel(
            name='OVCCareBenchmarkScore',
        ),
        migrations.DeleteModel(
            name='OVCCareCasePlan',
        ),
        migrations.DeleteModel(
            name='OVCCareCpara',
        ),
        migrations.DeleteModel(
            name='OVCCareForms',
        ),
        migrations.DeleteModel(
            name='OVCCareWellbeing',
        ),
        migrations.DeleteModel(
            name='OVCExplanations',
        ),
        migrations.DeleteModel(
            name='OVCGoals',
        ),
        migrations.DeleteModel(
            name='OVCHouseholdDemographics',
        ),
        migrations.DeleteModel(
            name='OVCReferrals',
        ),
    ]
