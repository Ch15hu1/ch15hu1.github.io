---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Home
layout: page
permalink: /
---
## Home
I'm **Ch15hu1** – a Windows Kernel enthusiast

## Latest Posts
<table class="latest-posts">
  {% assign all_docs = "" | split: "," %}
  {% for col in site.collections %}
    {% unless col.label == "posts" %}
      {% assign all_docs = all_docs | concat: col.docs %}
    {% endunless %}
  {% endfor %}
  {% assign latest = all_docs | sort: 'date' | reverse %}
  {% for post in latest limit:7 %}
    <tr>
      <td><a href="{{ post.url }}">{{ post.title }}</a></td>
      <td class="meta">{{ post.date | date: "%Y-%m-%d" }}</td>
      <td class="meta">{% if post.categories.size > 0 %}[{{ post.categories | join: ", " }}]{% endif %}</td>
    </tr>
  {% endfor %}
</table>
