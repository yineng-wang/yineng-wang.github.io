---
permalink: /
title: "Short Biography"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am currently a **Research Assistant Professor (RAP)** in the <a href='https://www.polyu.edu.hk/fb/'>**Faculty of Business**</a> at the Hong Kong Polytechnic University. Prior to this, I completed a postdoctoral fellowship in the <a href='https://www.dase.hku.hk/'>**Department of Data and Systems Engineering**</a> at the University of Hong Kong under the supervision of Professor <a href='https://www.dase.hku.hk/people/max-z-j-shen'>**Zuo-Jun Max Shen**</a>. I received my Ph.D. in Management Science and Engineering from Tsinghua University, advised by Professor <a href='https://www.ie.tsinghua.edu.cn/eng/info/1051/1028.htm'>**Fang He**</a>. I also hold a B.S. in Industrial Engineering, along with a minor in Internet Finance and Entrepreneurship from the PBC School of Finance, both from Tsinghua University. My research aims to integrate optimization, economics, and game theory to address the operational challenges faced by mobility systems.

I am looking for remote / part-time interns and research assistants. If you have interests in collaborating with me, please directly contact me at <a href='mailto:yineng.wang@polyu.edu.hk'>**yineng.wang@polyu.edu.hk**</a>.

## Academic Positions

* **Research Assistant Professor** (2025 -- now), Faculty of Business, Hong Kong Polytechnic University

* **Postdoctoral Research Fellow** (2024 -- 2025), Department of Data and Systems Engineering, The University of Hong Kong

## Education

* Ph.D. in Management Science and Engineering (2019 -- 2024), Department of Industrial Engineering, Tsinghua University

* B.S. in Industrial Engineering (2015 -- 2019), Department of Industrial Engineering, Tsinghua University


## Selected Publications

{% assign pubs = site.publications | sort: "date" | reverse %}
{% assign featured = pubs | where: "featured", true %}

<!-- <div class="pub-showcase-grid pub-showcase-grid--single"> -->
<div class="pub-showcase-grid">
  {% for post in featured %}
    {% include publication-showcase.html post=post %}
  {% endfor %}
</div>

<p>
  <a href="{{ base_path }}/publications/">View all publications →</a>
</p>
