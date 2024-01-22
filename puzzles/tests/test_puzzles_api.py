from rest_framework.test import APIClient, APITestCase
from rest_framework import status
from http.cookies import SimpleCookie


class GetRandomPuzzleTest(APITestCase):

    fixtures = [
        'testing_fixtures/puzzles_fixture.json', 
        'testing_fixtures/users_fixture.json',
        'testing_fixtures/player_profile_fixture.json'
        ]

    def test_endpoint_succeeds_for_legal_difficulty_level(self):
        url = '/api/get_random_puzzle/0/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_endpoint_fails_for_illegal_difficulty_level(self):
        url = '/api/get_random_puzzle/5/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_endpoint_doesnt_return_puzzle_in_used_puzzles_query_if_other_exists(self):
        used_puzzles=[14, 15]
        query_string = ','.join(str(x) for x in used_puzzles)
        url = f'/api/get_random_puzzle/3/?used_puzzles={query_string}'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertNotIn(response.data.get('id'), used_puzzles)

    def test_endpoint_returns_first_in_used_puzzles_query_if_none_other_exist(self):
        used_puzzles=[12, 14, 15, 16]
        query_string = ','.join(str(x) for x in used_puzzles)
        url = f'/api/get_random_puzzle/3/?used_puzzles={query_string}'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('id'), used_puzzles[0])

    def test_endpoint_returns_puzzle_with_correct_difficulty(self):
        url = '/api/get_random_puzzle/3/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('difficulty'), 3)


class TestCreatePuzzleInstance(APITestCase):
    
    fixtures = [
        'testing_fixtures/puzzles_fixture.json', 
        'testing_fixtures/users_fixture.json', 
        'testing_fixtures/player_profile_fixture.json'
    ]

    def test_endpoint_returns_403_if_no_profile_cookie_present(self):
        url = '/api/create_puzzle_instance/'
        data = {
            'puzzle': '13',
            'grid': '538764219162598734479132685345871926726349851891256473913427568687915342254683197',
            'started_on': '2024-01-22T11:37:51.097926',
            'completed_at': '2024-01-22T12:12:21.001Z',
            'completed': 'true'
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_endpoint_returns_200_if_profile_cookie_present(self):
        url = '/api/create_puzzle_instance/'
        data = {
            'puzzle': '13',
            'grid': '538764219162598734479132685345871926726349851891256473913427568687915342254683197',
            'started_on': '2024-01-22T11:37:51.097926',
            'completed_at': '2024-01-22T12:12:21.001Z',
            'completed': 'true'
        }
        self.client.cookies = SimpleCookie({
            'fruzzled_profile': 'c5a57bcd-5707-4ff5-ab9d-385235f334ec'
        })
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        
class GetLeaderboardTest(APITestCase):

    fixtures = [
        'testing_fixtures/player_profile_fixture.json',
        'testing_fixtures/puzzles_fixture.json', 
        'testing_fixtures/users_fixture.json', 
    ]

    def test_endpoint_returns_5_instances_ranked_by_duration_increasing(self):
        url = '/api/get_leaderboard/354/'
        response = self.client.get(url)
        print(response.data)
        top_n = response.data['top_n']
        durations = [inst['duration'] for inst in top_n]

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(top_n), 5)
        self.assertEqual(durations, sorted(durations))