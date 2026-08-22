---
layout: page
title: "Collection"
permalink: /collection/
---
{% for col in site.collections %}
  {% unless col.label == "posts" %}
<details class="collection-group">
  <summary><h2>{{ col.label | capitalize }}</h2></summary>
  {% include collection-tree.html col=col cur="" %}
</details>
  {% endunless %}
{% endfor %}
