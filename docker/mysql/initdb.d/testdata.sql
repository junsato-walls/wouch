INSERT INTO user (name, age) VALUES ("太郎", 15);
INSERT INTO user (name, age) VALUES ("次郎", 18);
INSERT INTO user (name, age) VALUES ("花子", 20);

Insert Into m_companies ( 
company_name, post_code, address_pref, address_city, address_other, facility_name, tell, ceo, capital, pay_cutoff_date, pay_date, empl_insur_apply_office_num, empl_insur_estab_date, labor_insur_num, labor_insur_estab_date, social_insur_num, social_insur_estab_date, welfare_pension_insur_office_num, corporate_num, industry_class, industry_type, start, paidleave_cutoff_date, end, create_at, create_acc, update_at, update_acc
 ) values ( 
'株式会社Walls', '123-4567', '北海道', '留萌市', '大字留萌1-1', '神居岩', '1234-567-890', '吉田次郎', '10000000', '27', '15', '1234567890123', '2019-04-01', '123456789012345', '2019-04-01', '123456', '2019-04-01', '1234', '1234567890123', '0', '陸空運輸', '2019-04-01', '04-01', NULL, '2020-02-20', '1', '2022-02-02', '1'
 );

Insert Into m_employees ( 
shift_id, employee_num, idm, name, name_kana, birthday, in_company, exit_company, sex, weekly_work_time, post_code, address_pref, address_city, address_other, tell, empl_insur_insured_num, pension_num, mynumber, former_job, dependent, health_insur_num, nationality, empl_insur_insur_qual_acq_date, empl_insur_insur_qual_lost_date, soc_insur_insur_qual_acq_date, soc_insur_insur_qual_lost_date, start, end, create_at, create_acc, update_at, update_acc, memo
 ) values ( 
'1', 'Admin', "012e5524f1463b3d", '神谷太郎', 'カミヤタロウ', '1990-04-01', '2010-04-01', NULL, '1', '40', '123-4567', '北海道', '留萌市', '大字留萌1-1', '1234-567-890', '1234567890123', '1234567890', '123456789012', NULL, '1', '1234567890123', '日本', '2010-04-01', NULL, '2010-04-01', NULL, '2010-04-01', NULL, '2020-04-07', '1', '2022/04/03', '1', NULL
 );
Insert Into m_employees ( 
shift_id, employee_num, idm, name, name_kana, birthday, in_company, exit_company, sex, weekly_work_time, post_code, address_pref, address_city, address_other, tell, empl_insur_insured_num, pension_num, mynumber, former_job, dependent, health_insur_num, nationality, empl_insur_insur_qual_acq_date, empl_insur_insur_qual_lost_date, soc_insur_insur_qual_acq_date, soc_insur_insur_qual_lost_date, start, end, create_at, create_acc, update_at, update_acc, memo
 ) values ( 
'1', 'w002', "2", '吉田次郎', 'ヨシダジロウ', '1990-04-01', '2010-04-01', NULL, '1', '40', '123-4567', '北海道', '留萌市', '大字留萌1-1', '1234-567-890', '1234567890123', '1234567890', '123456789012', NULL, '0', '1234567890123', '日本', '2010-04-01', NULL, '2010-04-01', NULL, '2010-04-01', NULL, '2020-04-07', '1', '2022-04-03', '1', NULL
 );
Insert Into m_employees ( 
shift_id, employee_num, idm, name, name_kana, birthday, in_company, exit_company, sex, weekly_work_time, post_code, address_pref, address_city, address_other, tell, empl_insur_insured_num, pension_num, mynumber, former_job, dependent, health_insur_num, nationality, empl_insur_insur_qual_acq_date, empl_insur_insur_qual_lost_date, soc_insur_insur_qual_acq_date, soc_insur_insur_qual_lost_date, start, end, create_at, create_acc, update_at, update_acc, memo
 ) values ( 
'1', 'w003', '3', '奥村三郎', 'オクムラサブロウ', '1990-04-01', '2010-04-01', NULL, '1', '40', '123-4567', '北海道', '留萌市', '大字留萌1-1', '1234-567-890', '1234567890123', '1234567890', '123456789012', NULL, '3', '1234567890123', '日本', '2010-04-01', NULL, '2010-04-01', NULL, '2010-04-01', NULL, '2020-04-07', '1', '2022-04-03', '1', NULL
 );
Insert Into m_employees ( 
shift_id, employee_num, idm, name, name_kana, birthday, in_company, exit_company, sex, weekly_work_time, post_code, address_pref, address_city, address_other, tell, empl_insur_insured_num, pension_num, mynumber, former_job, dependent, health_insur_num, nationality, empl_insur_insur_qual_acq_date, empl_insur_insur_qual_lost_date, soc_insur_insur_qual_acq_date, soc_insur_insur_qual_lost_date, start, end, create_at, create_acc, update_at, update_acc, memo
 ) values ( 
'1', 'w004', NULL, '佐藤花子', 'サトウハナコ', '1990-04-01', '2010-04-01', NULL, '2', '40', '123-4567', '北海道', '留萌市', '大字留萌1-1', '1234-567-890', '1234567890123', '1234567890', '123456789012', NULL, '2', '1234567890123', '日本', '2010-04-01', NULL, '2010-04-01', NULL, '2010-04-01', NULL, '2020-04-07', '1', '2022-04-03', '1', NULL
 );
Insert Into m_employees ( 
shift_id, employee_num, idm, name, name_kana, birthday, in_company, exit_company, sex, weekly_work_time, post_code, address_pref, address_city, address_other, tell, empl_insur_insured_num, pension_num, mynumber, former_job, dependent, health_insur_num, nationality, empl_insur_insur_qual_acq_date, empl_insur_insur_qual_lost_date, soc_insur_insur_qual_acq_date, soc_insur_insur_qual_lost_date, start, end, create_at, create_acc, update_at, update_acc, memo
 ) values ( 
'2', 'w005', NULL, '加藤愛', 'カトウアイ', '1990-04-01', '2010-04-01', NULL, '2', '55', '123-4567', '北海道', '留萌市', '大字留萌1-1', '1234-567-890', '1234567890123', '1234567890', '123456789012', NULL, '0', '1234567890123', '日本', '2010-04-01', NULL, '2010-04-01', NULL, '2010-04-01', NULL, '2020-04-07', '1', '2022-04-03', '1', '社長秘書'
 );

Insert Into m_payments ( 
employee_id, base, salary_type, std_monthly_compensation, commuting_pay, health_insur, care_insur, pension_insur, income_tax, inhabitant_tax, create_at, create_acc, update_at, update_acc
 ) values ( 
'1', '188000', '1', '0', '30000', '16000', '16000', '21800', '50000', '5000', '2020-04-01', '1', '2020-04-07', '1'
 );

Insert Into m_payments ( 
employee_id, base, salary_type, std_monthly_compensation, commuting_pay, health_insur, care_insur, pension_insur, income_tax, inhabitant_tax, create_at, create_acc, update_at, update_acc
 ) values ( 
'2', '221000', '1', '300000', '50000', '16000', '16000', '21800', '230000', '5000', '2020-04-01', '1', '2020-04-07', '1'
 );

Insert Into m_payments ( 
employee_id, base, salary_type, std_monthly_compensation, commuting_pay, health_insur, care_insur, pension_insur, income_tax, inhabitant_tax, create_at, create_acc, update_at, update_acc
 ) values ( 
'3', '221000', '1', '150000', '32000', '16000', '16000', '21800', '120000', '5000', '2020-04-01', '1', '2020-04-07', '1'
 );

Insert Into m_payments ( 
employee_id, base, salary_type, std_monthly_compensation, commuting_pay, health_insur, care_insur, pension_insur, income_tax, inhabitant_tax, create_at, create_acc, update_at, update_acc
 ) values ( 
'4', '284000', '1', '220000', '8000', '16000', '16000', '21800', '220000', '5000', '2020-04-01', '1', '2020-04-07', '1'
 );
Insert Into m_payments ( 
employee_id, base, salary_type, std_monthly_compensation, commuting_pay, health_insur, care_insur, pension_insur, income_tax, inhabitant_tax, create_at, create_acc, update_at, update_acc
 ) values ( 
'5', '2300', '2', '0', '150000', '16000', '16000', '21800', '1600000', '5000', '2020-04-01', '1', '2020-04-07', '1'
 );

Insert Into m_calendar ( 
ymd, year, month, day, day_of_week, visible_flg, attend_st, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'2023-3-2', '2023', '3', '2', '木', '1', '0', NULL, '2022-03-22', '1', '2022-03-28', '1'
 );
Insert Into m_calendar ( 
ymd, year, month, day, day_of_week, visible_flg, attend_st, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'2023-3-3', '2023', '3', '3', '金', '1', '0', NULL, '2022-03-22', '1', '2022-03-28', '1'
 );
Insert Into m_calendar ( 
ymd, year, month, day, day_of_week, visible_flg, attend_st, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'2023-3-4', '2023', '3', '4', '土', '1', '1', NULL, '2022-03-22', '1', '2022-03-28', '1'
 );
Insert Into m_calendar ( 
ymd, year, month, day, day_of_week, visible_flg, attend_st, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'2023-3-5', '2023', '3', '5', '日', '1', '1', NULL, '2022-03-22', '1', '2022-03-28', '1'
 );
Insert Into m_calendar ( 
ymd, year, month, day, day_of_week, visible_flg, attend_st, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'2023-3-6', '2023', '3', '6', '月', '1', '0', NULL, '2022-03-22', '1', '2022-03-28', '1'
 );
Insert Into m_calendar ( 
ymd, year, month, day, day_of_week, visible_flg, attend_st, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'2023-3-7', '2023', '3', '7', '火', '1', '0', NULL, '2022-03-22', '1', '2022-03-28', '1'
 );
Insert Into m_calendar ( 
ymd, year, month, day, day_of_week, visible_flg, attend_st, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'2023-3-8', '2023', '3', '8', '水', '1', '0', NULL, '2022-03-22', '1', '2022-03-28', '1'
 );
Insert Into m_calendar ( 
ymd, year, month, day, day_of_week, visible_flg, attend_st, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'2023-3-9', '2023', '3', '9', '木', '1', '0', NULL, '2022-03-22', '1', '2022-03-28', '1'
 );
Insert Into m_calendar ( 
ymd, year, month, day, day_of_week, visible_flg, attend_st, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'2023-3-10', '2023', '3', '10', '金', '1', '1', NULL, '2022-03-22', '1', '2022-03-28', '1'
 );
Insert Into m_calendar ( 
ymd, year, month, day, day_of_week, visible_flg, attend_st, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'2023-3-11', '2023', '3', '11', '土', '1', '1', NULL, '2022-03-22', '1', '2022-03-28', '1'
 );

Insert Into m_jobshift ( 
shift_name, delete_flg, job_type, work_in_time, work_out_time, rest, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'昼勤', '1', '1', '08:00', '17:00', '1:00', NULL, '2021-03-22', '1', '2022-01-18', '1'
 );
Insert Into m_jobshift ( 
shift_name, delete_flg, job_type, work_in_time, work_out_time, rest, memo, create_at, create_acc, update_at, update_acc
 ) values ( 
'パート', '1', '2', '11:00', '03:00', '2:00', NULL, '2021-03-22', '1', '2022-01-18', '1'
 );

Insert Into m_admin ( 
employee_id, login_id, password, fail_count, edit_flg, attend_flg, leave_flg, employee_flg, calendar_flg, payment_flg, start, end, create_at, create_acc, update_at, update_acc
 ) values ( 
'2', 'admin1', 'aiai41', '4', '1', '1', '1', '1', '1', '1', '2020-04-01', NULL, '2021-01-22', '1', NULL, NULL
 );
Insert Into m_admin ( 
employee_id, login_id, password, fail_count, edit_flg, attend_flg, leave_flg, employee_flg, calendar_flg, payment_flg, start, end, create_at, create_acc, update_at, update_acc
 ) values ( 
'3', 'admin2', '09360', '0', '1', '1', '1', '1', '1', '1', '2020-04-01', NULL, '2021-01-22', '1', NULL, NULL
 );
Insert Into m_admin ( 
employee_id, login_id, password, fail_count, edit_flg, attend_flg, leave_flg, employee_flg, calendar_flg, payment_flg, start, end, create_at, create_acc, update_at, update_acc
 ) values ( 
'4', 'admin3', 'Saha5', '0', '1', '1', '1', '1', '1', '1', '2020-04-01', NULL, '2021-01-22', '1', NULL, NULL
 );

INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'3', 2, 18, NULL, '2018-04-01', '2020-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'3', 0, 19, NULL, '2019-04-01', '2021-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'3', 3, 20, NULL, '2020-04-01', '2022-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'3', 9, 20, NULL, '2021-04-01', '2023-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'3', 20, 20, NULL, '2022-04-01', '2024-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'3', 20, 20, NULL, '2024-04-01', '2026-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'3', 20, 20, NULL, '2023-04-01', '2025-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'1', 2, 18, NULL, '2018-04-01', '2020-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'1', 0, 19, NULL, '2019-04-01', '2021-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'1', 3, 20, NULL, '2020-04-01', '2022-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'1', 9, 20, NULL, '2021-04-01', '2023-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'1', 20, 20, NULL, '2022-04-01', '2024-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc
) values (
'1', 20, 20, NULL, '2024-04-01', '2026-03-31', '2018-3-20', '1', NULL, NULL
);
INSERT Into m_leavemanage(
employee_id, remain_day, add_day, memo, start, end, create_at, create_acc, update_at, update_acc 
) values (
'1', 20, 20, NULL, '2023-04-01', '2025-03-31', '2018-3-20', '1', NULL, NULL
);

Insert Into t_attends ( 
employee_id, ymd, working_st, round_work_in_time, work_in, round_work_out_time, work_out, work_time, rest, overtime, nighttime, holiday_time, create_at, create_acc, create_mac, update_at, update_acc, update_mac
 ) values ( 
'1', '2022-08-04', '1', '2022-08-04 08:00:00', '2022-08-04 07:58:42', '2022-08-04 17:00:00', '2022-08-04 17:00:42', '8:00', '1:00', '0:00', '0:00', '0:00', '2022-08-04 07:58:42', '1', 'rumoi1', '2022-08-04 17:00:42', '1', 'rumoi1'
 );
Insert Into t_attends ( 
employee_id, ymd, working_st, round_work_in_time, work_in, round_work_out_time, work_out, work_time, rest, overtime, nighttime, holiday_time, create_at, create_acc, create_mac, update_at, update_acc, update_mac
 ) values ( 
'2', '2022-08-04', '1', '2022-08-04 08:00:00', '2022-08-04 07:47:11', '2022-08-04 17:00:00', '2022-08-04 17:00:03', '8:00', '1:00', '0:00', '0:00', '0:00', '2022-08-04 07:47:11', '2', 'rumoi1', '2022-08-04 17:00:03', '1', 'rumoi1'
 );
Insert Into t_attends ( 
employee_id, ymd, working_st, round_work_in_time, work_in, round_work_out_time, work_out, work_time, rest, overtime, nighttime, holiday_time, create_at, create_acc, create_mac, update_at, update_acc, update_mac
 ) values ( 
'3', '2022-08-04', '1', '2022-08-04 08:00:00', '2022-08-04 07:36:28', '2022-08-04 17:30:00', '2022-08-04 17:41:47', '8:30', '1:00', '0:30', '0:00', '0:00', '2022-08-04 07:36:28', '3', 'rumoi1', '2022-08-04 17:41:47', '1', 'rumoi1'
 );
Insert Into t_attends ( 
employee_id, ymd, working_st, round_work_in_time, work_in, round_work_out_time, work_out, work_time, rest, overtime, nighttime, holiday_time, create_at, create_acc, create_mac, update_at, update_acc, update_mac
 ) values ( 
'4', '2022-08-04', '1', '2022-08-04 08:00:00', '2022-08-04 07:28:07', '2022-08-04 18:00:00', '2022-08-04 18:03:12', '9:00', '1:00', '1:00', '0:00', '0:00', '2022-08-04 07:28:07', '4', 'rumoi1', '2022-08-04 18:03:12', '1', 'rumoi1'
 );
Insert Into t_attends ( 
employee_id, ymd, working_st, round_work_in_time, work_in, round_work_out_time, work_out, work_time, rest, overtime, nighttime, holiday_time, create_at, create_acc, create_mac, update_at, update_acc, update_mac
 ) values ( 
'5', '2022-08-04', '1', '2022-08-04 11:00:00', '2022-08-04 10:53:39', '2022-08-05 03:00:00', NULL, '11:00', '2:00', '0:00', '5:00', '0:00', '2022-08-04 10:53:39', '5', 'rumoi1', '2022-08-05 11:03:01', '1', 'hanaPC'
 );

Insert Into t_leaverequest ( 
employee_id, request_date, target_date, subm_st, authorizer, create_at, create_acc, update_at, update_acc
 ) values ( 
'3', '2022-08-01', '2022-08-21', '1', '2', '2022-08-01 10:03:11', '3', '2022-08-01 10:12:51', '2'
 );
Insert Into t_leaverequest ( 
employee_id, request_date, target_date, subm_st, authorizer, create_at, create_acc, update_at, update_acc
 ) values ( 
'3', '2022-08-01', '2022-08-22', '0', '2', '2022-08-01 10:03:11', '3', '2022-08-01 10:12:51', '2'
 );

Insert Into t_payments ( 
employee_id, payment_date, income, base, overtime_pay, nighttime_pay, holiday_pay, commuting_pay, health_insur, care_insur, pension_insur, employee_insur, income_tax, inhabitant_tax, withholding_tax, adj_pay, others, create_at, create_acc, update_at, update_acc
 ) values ( 
'1', '2020-05-15', '113200', '188000', '0', '0', '0', '30000', '16000', '16000', '16000', '21800', '30000', '5000', '0', '0', '0', '2020-04-01', '1', '2020-04-07', '1'
 );
Insert Into t_payments ( 
employee_id, payment_date, income, base, overtime_pay, nighttime_pay, holiday_pay, commuting_pay, health_insur, care_insur, pension_insur, employee_insur, income_tax, inhabitant_tax, withholding_tax, adj_pay, others, create_at, create_acc, update_at, update_acc
 ) values ( 
'2', '2020-05-15', '156200', '221000', '0', '0', '0', '50000', '16000', '16000', '16000', '21800', '40000', '5000', '0', '0', '0', '2020-04-01', '1', '2020-04-07', '1'
 );
Insert Into t_payments ( 
employee_id, payment_date, income, base, overtime_pay, nighttime_pay, holiday_pay, commuting_pay, health_insur, care_insur, pension_insur, employee_insur, income_tax, inhabitant_tax, withholding_tax, adj_pay, others, create_at, create_acc, update_at, update_acc
 ) values ( 
'3', '2020-05-15', '153200', '221000', '15000', '0', '0', '32000', '16000', '16000', '16000', '21800', '40000', '5000', '0', '0', '0', '2020-04-01', '1', '2020-04-07', '1'
 );
Insert Into t_payments ( 
employee_id, payment_date, income, base, overtime_pay, nighttime_pay, holiday_pay, commuting_pay, health_insur, care_insur, pension_insur, employee_insur, income_tax, inhabitant_tax, withholding_tax, adj_pay, others, create_at, create_acc, update_at, update_acc
 ) values ( 
'4', '2020-05-15', '197200', '284000', '30000', '0', '0', '8000', '16000', '16000', '16000', '21800', '50000', '5000', '0', '0', '0', '2020-04-01', '1', '2020-04-07', '1'
 );
Insert Into t_payments ( 
employee_id, payment_date, income, base, overtime_pay, nighttime_pay, holiday_pay, commuting_pay, health_insur, care_insur, pension_insur, employee_insur, income_tax, inhabitant_tax, withholding_tax, adj_pay, others, create_at, create_acc, update_at, update_acc
 ) values ( 
'5', '2020-05-15', '461200', '276000', '0', '230000', '0', '150000', '16000', '16000', '16000', '21800', '120000', '5000', '0', '0', '0', '2020-04-01', '1', '2020-04-07', '1'
 );
