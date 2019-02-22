# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('cpovc_registry', '0001_initial'),
        ('cpovc_ovc', '0001_initial'),
        ('cpovc_main', '0002_auto_20190220_1010'),
        ('cpovc_forms', '0002_auto_20190220_1010'),
    ]

    operations = [
        migrations.CreateModel(
            name='OVCCareBenchmarkScore',
            fields=[
                ('bench_mark_score_id', models.AutoField(serialize=False, primary_key=True)),
                ('bench_mark_1', models.IntegerField(default=0)),
                ('bench_mark_2', models.IntegerField(default=0)),
                ('bench_mark_3', models.IntegerField(default=0)),
                ('bench_mark_4', models.IntegerField(default=0)),
                ('bench_mark_5', models.IntegerField(default=0)),
                ('bench_mark_6', models.IntegerField(default=0)),
                ('bench_mark_7', models.IntegerField(default=0)),
                ('bench_mark_8', models.IntegerField(default=0)),
                ('bench_mark_9', models.IntegerField(default=0)),
                ('bench_mark_10', models.IntegerField(default=0)),
                ('bench_mark_11', models.IntegerField(default=0)),
                ('bench_mark_12', models.IntegerField(default=0)),
                ('bench_mark_13', models.IntegerField(default=0)),
                ('bench_mark_14', models.IntegerField(default=0)),
                ('bench_mark_15', models.IntegerField(default=0)),
                ('bench_mark_16', models.IntegerField(default=0)),
                ('bench_mark_17', models.IntegerField(default=0)),
                ('score', models.IntegerField()),
                ('is_void', models.BooleanField(default=False)),
                ('date_of_event', models.DateField(default=django.utils.timezone.now)),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('care_giver_id', models.ForeignKey(to='cpovc_registry.RegPerson')),
                ('event_id', models.ForeignKey(to='cpovc_forms.OVCCareEvents')),
                ('household_id', models.ForeignKey(to='cpovc_ovc.OVCHouseHold')),
            ],
            options={
                'db_table': 'ovc_care_benchmark_score',
            },
        ),
        migrations.CreateModel(
            name='OVCCareCasePlan',
            fields=[
                ('case_plan_id', models.AutoField(serialize=False, primary_key=True)),
                ('domain', models.CharField(max_length=50)),
                ('goal', models.CharField(max_length=255)),
                ('need', models.CharField(max_length=255)),
                ('priority', models.CharField(max_length=255)),
                ('responsible', models.CharField(max_length=50)),
                ('completion_date', models.DateField(default=django.utils.timezone.now)),
                ('results', models.CharField(max_length=300)),
                ('reasons', models.CharField(max_length=300)),
                ('is_void', models.BooleanField(default=False)),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('cp_service_id', models.ForeignKey(to='cpovc_main.SetupList')),
                ('event_id', models.ForeignKey(to='cpovc_forms.OVCCareEvents')),
            ],
            options={
                'db_table': 'ovc_care_case_plan',
            },
        ),
        migrations.CreateModel(
            name='OVCCareCpara',
            fields=[
                ('cpara_id', models.AutoField(serialize=False, primary_key=True)),
                ('question', models.CharField(max_length=150)),
                ('answer', models.CharField(max_length=5)),
                ('question_type', models.CharField(max_length=50)),
                ('domain', models.CharField(max_length=50)),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_void', models.BooleanField(default=False)),
                ('event_id', models.ForeignKey(to='cpovc_forms.OVCCareEvents')),
                ('household_id', models.ForeignKey(to='cpovc_ovc.OVCHouseHold')),
                ('person_id', models.ForeignKey(to='cpovc_registry.RegPerson')),
            ],
            options={
                'db_table': 'ovc_care_cpara',
            },
        ),
        migrations.CreateModel(
            name='OVCCareForms',
            fields=[
                ('form_id', models.AutoField(serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=255)),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_void', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='OVCCareWellbeing',
            fields=[
                ('well_being_id', models.AutoField(serialize=False, primary_key=True)),
                ('question', models.CharField(max_length=150)),
                ('answer', models.CharField(max_length=5)),
                ('question_type', models.CharField(max_length=50)),
                ('domain', models.CharField(max_length=50)),
                ('is_void', models.BooleanField(default=False)),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('event_id', models.ForeignKey(to='cpovc_forms.OVCCareEvents')),
                ('household_id', models.ForeignKey(to='cpovc_ovc.OVCHouseHold')),
                ('person_id', models.ForeignKey(to='cpovc_registry.RegPerson')),
            ],
            options={
                'db_table': 'ovc_care_well_being',
            },
        ),
        migrations.CreateModel(
            name='OVCExplanations',
            fields=[
                ('explanation_id', models.AutoField(serialize=False, primary_key=True)),
                ('question', models.CharField(max_length=255)),
                ('comment', models.CharField(max_length=255)),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('event_id', models.ForeignKey(to='cpovc_forms.OVCCareEvents')),
                ('form_id', models.ForeignKey(to='cpovc_forms.OVCCareForms')),
            ],
            options={
                'db_table': 'ovc_explanations',
            },
        ),
        migrations.CreateModel(
            name='OVCGoals',
            fields=[
                ('goal_id', models.AutoField(serialize=False, primary_key=True)),
                ('goal', models.CharField(max_length=255)),
                ('action', models.CharField(max_length=255)),
                ('event_id', models.ForeignKey(to='cpovc_forms.OVCCareEvents')),
                ('person_id', models.ForeignKey(to='cpovc_registry.RegPerson')),
            ],
            options={
                'db_table': 'ovc_goals',
            },
        ),
        migrations.CreateModel(
            name='OVCHouseholdDemographics',
            fields=[
                ('household_demographics_id', models.AutoField(serialize=False, primary_key=True)),
                ('key', models.CharField(max_length=15)),
                ('male', models.IntegerField(default=0)),
                ('female', models.IntegerField(default=0)),
                ('is_void', models.BooleanField(default=False)),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('event_id', models.ForeignKey(to='cpovc_forms.OVCCareEvents')),
                ('household_id', models.ForeignKey(to='cpovc_ovc.OVCHouseHold')),
            ],
            options={
                'db_table': 'ovc_household_demographics',
            },
        ),
        migrations.CreateModel(
            name='OVCReferrals',
            fields=[
                ('referral_id', models.AutoField(serialize=False, primary_key=True)),
                ('referral_date', models.DateField(default=django.utils.timezone.now)),
                ('service', models.CharField(max_length=20)),
                ('institution', models.CharField(max_length=50)),
                ('contact_person', models.CharField(max_length=50)),
                ('completed', models.BooleanField(default=False)),
                ('outcome', models.CharField(max_length=255)),
                ('event_id', models.ForeignKey(to='cpovc_forms.OVCCareEvents')),
                ('person_id', models.ForeignKey(to='cpovc_registry.RegPerson')),
            ],
            options={
                'db_table': 'ovc_referrals',
            },
        ),
        migrations.AddField(
            model_name='ovccarecaseplan',
            name='form_id',
            field=models.ForeignKey(to='cpovc_forms.OVCCareForms'),
        ),
        migrations.AddField(
            model_name='ovccarecaseplan',
            name='person_id',
            field=models.ForeignKey(to='cpovc_registry.RegPerson'),
        ),
    ]
