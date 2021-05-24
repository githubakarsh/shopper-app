Feature: Search page

It should open Search Page

Scenario: opening Search page
Given opening search page
Then it should display Search for a product

Given search box value must be empty
Then enter 'men' as search item
Then remove the 'men' value

Given enter 'Gold' as search box value
When click the item with gold
