/* Moment.js | version : 1.3.0 | author : Tim Wood | license : MIT */
(function(a,b){function q(a){this._d=a}function r(a,b){var c=a+"";while(c.length<b)c="0"+c;return c}function s(b,c,d,e){var f=typeof c=="string",g=f?{}:c,h,i,j,k;return f&&e&&(g[c]=e),h=(g.ms||g.milliseconds||0)+(g.s||g.seconds||0)*1e3+(g.m||g.minutes||0)*6e4+(g.h||g.hours||0)*36e5,i=(g.d||g.days||0)+(g.w||g.weeks||0)*7,j=(g.M||g.months||0)+(g.y||g.years||0)*12,h&&b.setTime(+b+h*d),i&&b.setDate(b.getDate()+i*d),j&&(k=b.getDate(),b.setDate(1),b.setMonth(b.getMonth()+j*d),b.setDate(Math.min((new a(b.getFullYear(),b.getMonth()+1,0)).getDate(),k))),b}function t(a){return Object.prototype.toString.call(a)==="[object Array]"}function u(b){return new a(b[0],b[1]||0,b[2]||1,b[3]||0,b[4]||0,b[5]||0,b[6]||0)}function v(b,d){function u(d){var e,i;switch(d){case"M":return f+1;case"Mo":return f+1+s(f+1);case"MM":return r(f+1,2);case"MMM":return c.monthsShort[f];case"MMMM":return c.months[f];case"D":return g;case"Do":return g+s(g);case"DD":return r(g,2);case"DDD":return e=new a(h,f,g),i=new a(h,0,1),~~((e-i)/864e5+1.5);case"DDDo":return e=u("DDD"),e+s(e);case"DDDD":return r(u("DDD"),3);case"d":return l;case"do":return l+s(l);case"ddd":return c.weekdaysShort[l];case"dddd":return c.weekdays[l];case"w":return e=new a(h,f,g-l+5),i=new a(e.getFullYear(),0,4),~~((e-i)/864e5/7+1.5);case"wo":return e=u("w"),e+s(e);case"ww":return r(u("w"),2);case"YY":return r(h%100,2);case"YYYY":return h;case"a":return m>11?t.pm:t.am;case"A":return m>11?t.PM:t.AM;case"H":return m;case"HH":return r(m,2);case"h":return m%12||12;case"hh":return r(m%12||12,2);case"m":return n;case"mm":return r(n,2);case"s":return o;case"ss":return r(o,2);case"zz":case"z":return(b.toString().match(k)||[""])[0].replace(j,"");case"Z":return(p>0?"+":"-")+r(~~(Math.abs(p)/60),2)+":"+r(~~(Math.abs(p)%60),2);case"ZZ":return(p>0?"+":"-")+r(~~(10*Math.abs(p)/6),4);case"L":case"LL":case"LLL":case"LLLL":case"LT":return v(b,c.longDateFormat[d]);default:return d.replace(/(^\[)|(\\)|\]$/g,"")}}var e=new q(b),f=e.month(),g=e.date(),h=e.year(),l=e.day(),m=e.hours(),n=e.minutes(),o=e.seconds(),p=e.zone(),s=c.ordinal,t=c.meridiem;return d.replace(i,u)}function w(b,d){function p(a,b){var d;switch(a){case"M":case"MM":e[1]=~~b-1;break;case"MMM":case"MMMM":for(d=0;d<12;d++)if(c.monthsParse[d].test(b)){e[1]=d;break}break;case"D":case"DD":case"DDD":case"DDDD":e[2]=~~b;break;case"YY":b=~~b,e[0]=b+(b>70?1900:2e3);break;case"YYYY":e[0]=~~Math.abs(b);break;case"a":case"A":o=b.toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":e[3]=~~b;break;case"m":case"mm":e[4]=~~b;break;case"s":case"ss":e[5]=~~b;break;case"Z":case"ZZ":h=!0,d=b.match(n),d[1]&&(f=~~d[1]),d[2]&&(g=~~d[2]),d[0]==="-"&&(f=-f,g=-g)}}var e=[0,0,1,0,0,0,0],f=0,g=0,h=!1,i=b.match(m),j=d.match(l),k,o;for(k=0;k<j.length;k++)p(j[k],i[k]);return o&&e[3]<12&&(e[3]+=12),o===!1&&e[3]===12&&(e[3]=0),e[3]+=f,e[4]+=g,h?new a(a.UTC.apply({},e)):u(e)}function x(a,b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;for(f=0;f<c;f++)~~a[f]!==~~b[f]&&e++;return e+d}function y(a,b){var c,d=a.match(m),e=[],f=99,g,h,i;for(g=0;g<b.length;g++)h=w(a,b[g]),i=x(d,v(h,b[g]).match(m)),i<f&&(f=i,c=h);return c}function z(a,b,d){var e=c.relativeTime[a];return typeof e=="function"?e(b||1,!!d,a):e.replace(/%d/i,b||1)}function A(a,b){var c=d(Math.abs(a)/1e3),e=d(c/60),f=d(e/60),g=d(f/24),h=d(g/365),i=c<45&&["s",c]||e===1&&["m"]||e<45&&["mm",e]||f===1&&["h"]||f<22&&["hh",f]||g===1&&["d"]||g<=25&&["dd",g]||g<=45&&["M"]||g<345&&["MM",d(g/30)]||h===1&&["y"]||["yy",h];return i[2]=b,z.apply({},i)}function B(a,b){c.fn[a]=function(a){return a!=null?(this._d["set"+b](a),this):this._d["get"+b]()}}var c,d=Math.round,e={},f=typeof module!="undefined",g="months|monthsShort|monthsParse|weekdays|weekdaysShort|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),h,i=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|zz?|ZZ?|LT|LL?L?L?)/g,j=/[^A-Z]/g,k=/\([A-Za-z ]+\)|:[0-9]{2} [A-Z]{3} /g,l=/(\\)?(MM?M?M?|dd?d?d|DD?D?D?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|ZZ?|T)/g,m=/(\\)?([0-9]+|([a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+|([\+\-]\d\d:?\d\d))/gi,n=/([\+\-]|\d\d)/gi,o="1.3.0",p="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|");c=function(c,d){if(c===null)return null;var e;return c&&c._d instanceof a?e=new a(+c._d):d?t(d)?e=y(c,d):e=w(c,d):e=c===b?new a:c instanceof a?c:t(c)?u(c):new a(c),new q(e)},c.version=o,c.lang=function(a,b){var d,h,i,j=[];if(b){for(d=0;d<12;d++)j[d]=new RegExp("^"+b.months[d]+"|^"+b.monthsShort[d].replace(".",""),"i");b.monthsParse=b.monthsParse||j,e[a]=b}if(e[a])for(d=0;d<g.length;d++)h=g[d],c[h]=e[a][h]||c[h];else f&&(i=require("./lang/"+a),c.lang(a,i))},c.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"}}),c.fn=q.prototype={clone:function(){return c(this)},valueOf:function(){return+this._d},"native":function(){return this._d},toString:function(){return this._d.toString()},toDate:function(){return this._d},format:function(a){return v(this._d,a)},add:function(a,b){return this._d=s(this._d,a,1,b),this},subtract:function(a,b){return this._d=s(this._d,a,-1,b),this},diff:function(a,b,e){var f=c(a),g=this._d-f._d,h=this.year()-f.year(),i=this.month()-f.month(),j=this.day()-f.day(),k;return b==="months"?k=h*12+i+j/30:b==="years"?k=h+i/12:k=b==="seconds"?g/1e3:b==="minutes"?g/6e4:b==="hours"?g/36e5:b==="days"?g/864e5:b==="weeks"?g/6048e5:b==="days"?g/3600:g,e?k:d(k)},from:function(a,b){var d=this.diff(a),e=c.relativeTime,f=A(d,b);return b?f:(d<=0?e.past:e.future).replace(/%s/i,f)},fromNow:function(a){return this.from(c(),a)},calendar:function(){var a=c(),b=c([a.year(),a.month(),a.date()]),d=this.diff(b,"days",!0),e=c.calendar,f=e.sameElse,g=d<-6?f:d<-1?e.lastWeek:d<0?e.lastDay:d<1?e.sameDay:d<2?e.nextDay:d<7?e.nextWeek:f;return this.format(typeof g=="function"?g.apply(this):g)},isLeapYear:function(){var a=this.year();return a%4===0&&a%100!==0||a%400===0},isDST:function(){return this.zone()!==c([this.year()]).zone()},day:function(a){var b=this._d.getDay();return a==null?b:this.add({d:a-b})}};for(h=0;h<p.length;h++)B(p[h].toLowerCase(),p[h]);B("year","FullYear"),c.fn.zone=function(){return this._d.getTimezoneOffset()},f&&(module.exports=c),typeof window!="undefined"&&(window.moment=c)})(Date)



/*
* Copyright (c) 2010 Rachot Moragraan, City of Garden Grove, CA
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/


// takes a JSON object with pattern options
function RecurringDate (pattern, date_format) {
    if (typeof pattern != 'object') throw new TypeError('pattern must be a JSON');

    if (!pattern.every) {
        throw new ReferenceError('Every magnitude must be specified');
    }

    if (isNaN(parseInt(pattern.every))) {
        throw new TypeError('Every magnitude must be a valid number');
    }
	
	this.pattern = pattern;

    // stores generated dates based on recurrence pattern
    this.dates = [];

    this.start = moment(pattern.start);
    this.every = parseInt(pattern.every);
    this.unit = pattern.unit;
    this.end_condition = pattern.end_condition;
    this.until = Date.parse(pattern.until);
    this.rfor = parseInt(pattern.rfor);
    this.occurrence_of = pattern.occurrence_of;
    this.nth = parseInt(pattern.nth);
    this.days = (pattern.days) ? pattern.days.sort() : [];

    this.date_format = date_format || 'MM/dd/yyyy';
}

// tries to describe the pattern in plain english
RecurringDate.prototype.describe = function () {
    var units = {'d': 'day', 'w': 'week', 'm': 'month', 'y': 'year'};
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'day'];
    var nthword = ['', 'first', 'second', 'third', 'forth', 'fifth', 'last']

    var t = ['Every'];
    if (this.every > 2) {
        t.push(this.every, units[this.unit] + 's');
    } else if (this.every == 2) {
        t.push('other', units[this.unit]);
    } else {
        t.push(units[this.unit]);
    }

    if (this.unit == 'w') {
        var d = [];
        for (var i = 0; i < this.days.length; i++) {
            d.push(week[this.days[i]]);
        }
        t.push('on', d.join(', '));
    } else if (this.unit == 'm') {
        // check if it's a special word
        day_idx = (this.occurrence_of < 0) ? week.length - 1 : this.occurrence_of;
        nth_idx = (this.nth < 0) ? nthword.length-1 : this.nth;

        t.push('on the', nthword[nth_idx], week[day_idx]);
    }

    t.push('starting on', this.start.toString(this.date_format));

    if (this.end_condition == 'until') {
        t.push('until', this.until.toString(this.date_format));
    } else if (this.end_condition == 'for') {
        t.push('for', this.rfor, 'occurrences');
    }

    return t.join(' ');
}

// determine whether given date is in recurrence
RecurringDate.prototype.contains = function (d) {
    if (this.dates.length == 0) this.generate();

    // can be string or date object already
    d = moment(d);
	
    for (var i = 0; i < this.dates.length; i++) {
        if (d.diff(this.dates[i], 'days') === 0) return true;
    }
    return false;
}

// returns an array of dates base on input pattern
RecurringDate.prototype.generate = function (max) {
    if (!(this.rfor || this.until || max)) {
        throw new RangeError('There is no valid end condition specified');
    }

    var end_condition_reached = function (occurrences, current_date) {
        if (max && occurrences.length >= max) return true;
        if (this.end_condition == 'for' && this.rfor && occurrences.length >= this.rfor) return true;
        if (this.end_condition == 'until' && this.until && current_date > this.until) return true;
        return false;
    }.bind(this);

    var dates = [];

    var curr = this.start.clone();
    // always include start date in recurrence
    dates.push(curr.clone());

    // weekly recurrence
    if (this.unit == 'w') {
        // if it's not already a sunday, move it to the current week's sunday
        if (!curr.day() === 0) curr.day(0);

        if (this.days.length == 0) {
            throw new RangeError('Weekly recurrence was selected without any days specified.');
            return null;
        }

        while (!end_condition_reached(dates, curr)) {

            // scan through the checked days
            for (var i in this.days) {
                var d = this.days[i];
				
                if (curr.day() < d) curr.day(d);				
                if (curr <= this.start) continue;
                if (end_condition_reached(dates, curr)) continue;

                dates.push(curr.clone());
            }

            // rewind back to sunday
            if (curr.day() !== 0) curr.day(0);
            // next repetition
			curr.add('weeks', this.every);
        }

    } else if (this.unit == 'm') {
        while (true) {
            if (this.occurrence_of == -1) {
                curr.date(-1);
            } else {
                curr.moveToNthOccurrence(this.occurrence_of, this.nth);
            }

            if (end_condition_reached(dates, curr)) break;

            if (curr > this.start) {
                dates.push(curr.clone());
            }

            curr.add('months', this.every);
        }

    } else {
        while (true) {
            if (this.unit == 'd') {
                curr.add('days', this.every);
            } else if (this.unit == 'y') {
                curr.add('years', this.every);
            }
            // else infinite loop yay

            if (end_condition_reached(dates, curr)) break;

            dates.push(curr.clone());
        }
    }

    // cache results
    this.dates = dates;
    return this.dates;
}
