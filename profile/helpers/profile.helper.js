const Helper = require('../../helpers/app.helper')
exports.isEmpty = (obj) => {
    if (obj == null) {
        return true
    } else {
        return Object.keys(obj).length === 0;
    }

}
exports.mergeUserData = (usersData, usersPlan) => {
    const registeredDate = new Date(usersData.created_at);
    const user = {
        userDetails: {
            id: usersData.id,
            name: usersData.name,
            email: usersData.email,
            email_verified: Helper.isDate(usersData.email_verified_at),
            role: usersData.role_id,
            registered: registeredDate.toDateString(),
            firstLogin: usersPlan?.info.registered || "Never",
            is_banned: Helper.SrtToBool(usersData.is_banned),
            money: usersData.money,
            kick_count: usersPlan?.info.kick_count || 0,
            last_seen: usersPlan?.info.last_seent || "Never",
            favorite_server: usersPlan?.info.favorite_server || "None",
            mob_kill_count: usersPlan?.mob_kill_count || 0,
            player_kill_count: usersPlan?.player_kill_count || 0,
            activity_index_group: usersPlan?.info.activity_index_group || "None",
            playtime: usersPlan?.info.playtime || 0,
            session_median: usersPlan?.info.session_median || 0,
            active_playtime: usersPlan?.info.active_playtime || 0,
            operator: usersPlan?.info.operator || false,
            afk_time: usersPlan?.info.afk_time || 0,
            death_count: usersPlan?.info.death_count || 0,
            latest_join_address: usersPlan?.info.latest_join_address || "None",
            worst_ping: usersPlan?.info.worst_ping || 0,
            session_count: usersPlan?.info.session_count || 0,
            online: usersPlan?.info.online || false,
            longest_session_length: usersPlan?.info.longest_session_length || 0,
            best_ping: usersPlan?.info.best_ping || 0,
            banned: usersPlan?.info.banned || false,
            activity_index: usersPlan?.info.activity_index || 0,
            average_ping: usersPlan?.average_ping || 0,
        },
        online_activity: {
            session_count_30d: usersPlan?.kill_data.deaths_7d || 0,
            session_count_7d: usersPlan?.kill_data.deaths_7d || 0,
            afk_time_7d: usersPlan?.kill_data.deaths_7d || "0s",
            mob_kill_count_30d: usersPlan?.kill_data.deaths_7d || 0,
            active_playtime_7d: usersPlan?.kill_data.deaths_7d || "0s",
            mob_kill_count_7d: usersPlan?.kill_data.deaths_7d || 0,
            afk_time_30d: usersPlan?.kill_data.deaths_7d || "0s",
            average_session_length_30d: usersPlan?.kill_data.deaths_7d || "0s",
            death_count_30d: 0,
            active_playtime_30d: usersPlan?.kill_data.deaths_7d || "0s",
            average_session_length_7d: usersPlan?.kill_data.deaths_7d || "0s",
            median_session_length_7d: usersPlan?.kill_data.deaths_7d || "0s",
            median_session_length_30d: usersPlan?.kill_data.deaths_7d || "0s",
            playtime_30d: usersPlan?.kill_data.deaths_7d || "0s",
            player_kill_count_30d: usersPlan?.kill_data.deaths_7d || 0,
            death_count_7d: usersPlan?.kill_data.deaths_7d || 0,
            playtime_7d: usersPlan?.kill_data.deaths_7d || "0s",
            player_kill_count_7d: usersPlan?.kill_data.deaths_7d || 0,
        },
        kill_data: {
            deaths_7d: usersPlan?.kill_data.deaths_7d || 0,
            mob_deaths_7d: usersPlan?.kill_data.mob_deaths_7d || 0,
            mob_kills_total: usersPlan?.kill_data.mob_kills_total || 0,
            player_kdr_30d: usersPlan?.kill_data.player_kdr_30d || 0,
            player_kills_7d: usersPlan?.kill_data.player_kills_7d || 0,
            player_deaths_total: usersPlan?.kill_data.player_deaths_total || 0,
            deaths_30d: usersPlan?.kill_data.deaths_30d || 0,
            deaths_total: usersPlan?.kill_data.deaths_total || 0,
            player_kills_total: usersPlan?.kill_data.player_kills_total || 0,
            mob_deaths_30d: usersPlan?.kill_data.mob_deaths_30d || 0,
            player_deaths_30d: usersPlan?.kill_data.player_deaths_30d || 0,
            mob_kdr_30d: usersPlan?.kill_data.mob_kdr_30d || 0,
            player_kdr_total: usersPlan?.kill_data.player_kdr_total || 0,
            weapon_3rd: usersPlan?.kill_data.weapon_3rd || "-",
            mob_kdr_7d: usersPlan?.kill_data.mob_kdr_7d || 0,
            player_kdr_7d: usersPlan?.kill_data.player_kdr_7d || 0,
            player_kills_30d: usersPlan?.kill_data.player_kills_30d || 0,
            weapon_2nd: usersPlan?.kill_data.weapon_2nd || "-",
            player_deaths_7d: usersPlan?.kill_data.player_deaths_7d || 0,
            mob_deaths_total: usersPlan?.kill_data.mob_deaths_total || 0,
            mob_kills_7d: usersPlan?.kill_data.mob_kills_7d || 0,
            mob_kdr_total: usersPlan?.kill_data.mob_kdr_total || 0,
            weapon_1st: usersPlan?.kill_data.weapon_1st || "-",
            mob_kills_30d: usersPlan?.kill_data.mob_kills_30d || 0,
        }
    }
    return user
}